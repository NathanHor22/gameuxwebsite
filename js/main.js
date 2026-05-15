const SELECTORS = {
  nav: "[data-nav]",
  menuToggle: "[data-menu-toggle]",
  meshCanvas: "[data-mesh-gradient]",
  speakerMeshCanvas: "[data-speaker-mesh-gradient]",
  hotelSliders: "[data-hotel-slider]",
  revealSections: "main > section:not(.hero)",
};
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SCROLL_REVEAL_OPTIONS = {
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.14,
};

const nav = document.querySelector(SELECTORS.nav);
const menuToggle = document.querySelector(SELECTORS.menuToggle);
const meshCanvas = document.querySelector(SELECTORS.meshCanvas);
const speakerMeshCanvas = document.querySelector(SELECTORS.speakerMeshCanvas);
const hotelSliders = Array.from(document.querySelectorAll(SELECTORS.hotelSliders));

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function prefersStaticCanvas() {
  return prefersReducedMotion();
}

function setupMenu(navElement, toggleElement) {
  const headerElement = toggleElement.closest(".topbar");

  function setMenuOpen(isOpen) {
    navElement.classList.toggle("is-open", isOpen);
    headerElement?.classList.toggle("is-menu-open", isOpen);
    toggleElement.setAttribute("aria-expanded", String(isOpen));
    toggleElement.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  toggleElement.addEventListener("click", () => {
    setMenuOpen(!navElement.classList.contains("is-open"));
  });

  navElement.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuOpen(false);
    }
  });
}

function setupNavHighlight(navElement) {
  const links = Array.from(navElement.querySelectorAll("a[href]"));
  const currentPath = normalizePath(window.location.pathname);

  function normalizePath(pathname) {
    return pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  }

  function linkUrl(link) {
    try {
      return new URL(link.getAttribute("href"), window.location.href);
    } catch {
      return null;
    }
  }

  const samePageLinks = links
    .map((link) => ({ link, url: linkUrl(link) }))
    .filter(({ url }) => (
      url &&
      url.origin === window.location.origin &&
      normalizePath(url.pathname) === currentPath
    ));
  const sectionLinks = samePageLinks.filter(({ url }) => url.hash);
  const pageLinks = samePageLinks.filter(({ url }) => !url.hash);
  const targets = sectionLinks
    .map(({ link, url }) => {
      const id = decodeURIComponent(url.hash.slice(1));
      const target = document.getElementById(id);
      return target ? { id, link, target } : null;
    })
    .filter(Boolean);

  if (!targets.length) return;

  const homeTarget = targets.find(({ id }) => id === "home");
  let isTicking = false;
  let lockedActiveLink = null;
  let activeUnlockTimer = 0;

  function documentTop(element) {
    return element.getBoundingClientRect().top + window.scrollY;
  }

  function navOffset() {
    const topbar = document.querySelector(".topbar");
    const cssOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--anchor-offset"));
    return Number.isFinite(cssOffset) ? cssOffset : (topbar?.getBoundingClientRect().height || 0) + 56;
  }

  function targetForHash(hash) {
    return targets.find(({ link }) => linkUrl(link)?.hash === hash);
  }

  function scrollToTarget(target, isSmooth = true, shouldCorrect = true) {
    const behavior = isSmooth && !prefersReducedMotion() ? "smooth" : "auto";

    function performScroll(nextBehavior) {
      const top = Math.max(0, documentTop(target.target) - navOffset());

      if (typeof window.scrollTo === "function") {
        window.scrollTo({ top, behavior: nextBehavior });
        return;
      }

      target.target.scrollIntoView({ block: "start", behavior: nextBehavior });
    }

    performScroll(behavior);

    if (shouldCorrect) {
      const firstDelay = behavior === "smooth" ? 520 : 80;
      const secondDelay = behavior === "smooth" ? 900 : 260;
      window.setTimeout(() => performScroll("auto"), firstDelay);
      window.setTimeout(() => performScroll("auto"), secondDelay);
    }
  }

  function setActive(activeLink) {
    samePageLinks.forEach(({ link }) => {
      link.removeAttribute("aria-current");
    });
    pageLinks.forEach(({ link }) => {
      link.removeAttribute("aria-current");
    });

    if (!activeLink) return;
    const activeUrl = linkUrl(activeLink);
    activeLink.setAttribute("aria-current", activeUrl?.hash ? "location" : "page");
  }

  function clearActiveLock() {
    if (activeUnlockTimer) {
      window.clearTimeout(activeUnlockTimer);
      activeUnlockTimer = 0;
    }

    if (!lockedActiveLink) return;
    lockedActiveLink = null;
    requestUpdate();
  }

  function scheduleActiveUnlock(delay = 180) {
    if (activeUnlockTimer) {
      window.clearTimeout(activeUnlockTimer);
    }

    activeUnlockTimer = window.setTimeout(clearActiveLock, delay);
  }

  function lockActiveLink(activeLink) {
    lockedActiveLink = activeLink;
    setActive(activeLink);
    scheduleActiveUnlock(1400);
  }

  function activeLinkFromScroll() {
    const hashTarget = targetForHash(window.location.hash);
    const topbarBottom = document.querySelector(".topbar")?.getBoundingClientRect().bottom || 0;

    if (hashTarget && hashTarget.id !== "home") {
      const targetRect = hashTarget.target.getBoundingClientRect();
      if (targetRect.bottom > topbarBottom && targetRect.top < window.innerHeight) {
        return hashTarget.link;
      }
    }

    return homeTarget?.link || targets[0]?.link;
  }

  function updateActiveLink() {
    isTicking = false;
    if (lockedActiveLink) {
      setActive(lockedActiveLink);
      scheduleActiveUnlock();
      return;
    }

    setActive(activeLinkFromScroll());
  }

  function requestUpdate() {
    if (isTicking) return;
    isTicking = true;
    requestAnimationFrame(updateActiveLink);
  }

  navElement.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link) return;

    const target = targets.find(({ link: targetLink }) => targetLink === link);
    if (target) {
      event.preventDefault();
      lockActiveLink(target.link);
      history.pushState(null, "", linkUrl(target.link)?.hash || "#");
      scrollToTarget(target);
    }
  });

  window.addEventListener("hashchange", () => {
    clearActiveLock();
    const target = targetForHash(window.location.hash);
    if (target) {
      setActive(target.link);
      scrollToTarget(target, false);
    } else {
      requestUpdate();
    }
  }, { passive: true });
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  const initialTarget = targetForHash(window.location.hash);
  if (initialTarget) {
    setActive(initialTarget.link);
    requestAnimationFrame(() => {
      scrollToTarget(initialTarget, false);
    });
  } else {
    updateActiveLink();
  }
}

function revealSection(section) {
  section.classList.add("is-visible");
}

function setupScrollReveal() {
  const sections = Array.from(document.querySelectorAll(SELECTORS.revealSections));
  if (!sections.length) return;

  sections.forEach((section) => {
    section.classList.add("scroll-reveal");
  });

  if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
    sections.forEach(revealSection);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      revealSection(entry.target);
      observer.unobserve(entry.target);
    });
  }, SCROLL_REVEAL_OPTIONS);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

function setupHotelSlider(slider) {
  const track = slider.querySelector("[data-hotel-track]");
  const buttons = Array.from(slider.querySelectorAll("[data-hotel-page-button]"));
  const cards = Array.from(slider.querySelectorAll(".hotel-card-set:not(.hotel-card-set--clone) .hotel-card"));
  if (!track || !buttons.length || !cards.length) return;

  function setPage(page) {
    const nextPage = page === 1 ? 1 : 0;
    slider.dataset.hotelPage = String(nextPage);
    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-hotel-page-button") === String(nextPage);
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setPage(Number(button.getAttribute("data-hotel-page-button")));
    });
  });

  track.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element) || target.closest("a, button")) return;

    const card = target.closest(".hotel-card");
    if (!card || !cards.includes(card)) return;

    const sliderRect = slider.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const currentPage = slider.dataset.hotelPage === "1" ? 1 : 0;

    if (currentPage === 0 && cardRect.right > sliderRect.right + 1) {
      setPage(1);
    }

    if (currentPage === 1 && cardRect.left < sliderRect.left - 1) {
      setPage(0);
    }
  });

  setPage(Number(slider.dataset.hotelPage));
}

function createVisibleCanvasLoop(canvas, paintFrame) {
  let animationFrame = 0;

  function shouldAnimate() {
    return !prefersStaticCanvas();
  }

  function stop() {
    if (!animationFrame) return;
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  function tick(timestamp) {
    animationFrame = 0;
    paintFrame(timestamp);
    if (shouldAnimate()) {
      animationFrame = requestAnimationFrame(tick);
    }
  }

  function start() {
    if (animationFrame || !shouldAnimate()) return;
    animationFrame = requestAnimationFrame(tick);
  }

  paintFrame(performance.now());
  start();

  return () => {
    stop();
  };
}

function createMeshGradient(canvas) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return;

  const colors = {
    black: [21, 22, 25],
    orange: [250, 81, 25],
  };
  const settings = {
    speed: 0.72,
    distortion: 0.62,
    scale: 1,
    rotation: 0,
    offsetX: -0.5,
    offsetY: 0.28,
  };
  let width = 0;
  let height = 0;
  let deviceScale = 1;
  let elapsed = 0;
  let repaint = () => {};

  function resize() {
    const rect = canvas.getBoundingClientRect();
    deviceScale = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * deviceScale);
    canvas.height = Math.round(height * deviceScale);
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    repaint();
  }

  function colorWithAlpha(color, alpha) {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
  }

  function meshPoint(x, y, radius, phase, driftX, driftY) {
    const radians = (settings.rotation * Math.PI) / 180;
    const wave = phase + elapsed;
    const centeredX = x - 0.5;
    const centeredY = y - 0.5;
    const rotatedX = centeredX * Math.cos(radians) - centeredY * Math.sin(radians);
    const rotatedY = centeredX * Math.sin(radians) + centeredY * Math.cos(radians);
    const distortion = settings.distortion * settings.scale;

    return {
      x: width * (x + rotatedX * 0.05 + settings.offsetX * 0.08 + Math.cos(wave) * driftX * distortion),
      y: height * (y + rotatedY * 0.05 + settings.offsetY * 0.08 + Math.sin(wave * 0.92) * driftY * distortion),
      radius: Math.max(width, height) * radius * settings.scale,
    };
  }

  function paintBlob(color, point, stops) {
    const gradient = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius);
    stops.forEach(([offset, alpha]) => {
      gradient.addColorStop(offset, colorWithAlpha(color, alpha));
    });
    context.fillStyle = gradient;
    context.fillRect(-point.radius, -point.radius, width + point.radius * 2, height + point.radius * 2);
  }

  function render(timestamp = 0) {
    elapsed = timestamp * 0.00072 * settings.speed;
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    context.clearRect(0, 0, width, height);

    const base = context.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, "#2b1a16");
    base.addColorStop(0.3, "#151619");
    base.addColorStop(0.72, "#090909");
    base.addColorStop(1, "#030303");
    context.fillStyle = base;
    context.fillRect(0, 0, width, height);

    context.save();
    context.globalCompositeOperation = "screen";
    context.filter = `blur(${Math.max(width, height) * 0.04}px)`;
    paintBlob(colors.orange, meshPoint(0.16, 0.02, 0.42, 0.2, 0.52, 0.34), [[0, 0.88], [0.42, 0.4], [1, 0]]);
    paintBlob(colors.orange, meshPoint(0.92, 0.28, 0.48, 2.8, 0.44, 0.32), [[0, 0.8], [0.4, 0.34], [1, 0]]);
    paintBlob(colors.orange, meshPoint(0.62, 0.92, 0.38, 4.2, 0.34, 0.42), [[0, 0.42], [0.5, 0.18], [1, 0]]);
    context.restore();

    context.save();
    context.globalCompositeOperation = "multiply";
    context.filter = `blur(${Math.max(width, height) * 0.03}px)`;
    paintBlob(colors.black, meshPoint(0.36, 0.45, 0.62, 1.4, 0.28, 0.2), [[0, 0.94], [0.58, 0.56], [1, 0]]);
    paintBlob(colors.black, meshPoint(0.66, 0.78, 0.74, 3.4, 0.2, 0.28), [[0, 0.8], [0.64, 0.42], [1, 0]]);
    context.restore();
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  const stopAnimation = createVisibleCanvasLoop(canvas, render);
  repaint = () => render(performance.now());

  return () => {
    stopAnimation();
    window.removeEventListener("resize", resize);
  };
}

function createSpeakerMeshGradient(canvas) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return;

  const colors = {
    orange: [250, 82, 26],
    white: [255, 255, 255],
    coolWhite: [246, 247, 248],
    grey: [148, 153, 157],
    paleGrey: [222, 225, 228],
  };
  const settings = {
    speed: 0.242,
    distortion: 0.95,
    scale: 1,
  };
  let width = 0;
  let height = 0;
  let deviceScale = 1;
  let elapsed = 0;
  let startTime = null;
  let repaint = () => {};

  function resize() {
    const rect = canvas.getBoundingClientRect();
    deviceScale = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * deviceScale);
    canvas.height = Math.round(height * deviceScale);
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    repaint();
  }

  function colorWithAlpha(color, alpha) {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
  }

  function meshPoint(x, y, radius, phase, orbitX, orbitY, spin = 1) {
    const wave = elapsed * spin + phase;
    const counterWave = elapsed * (spin * 0.68) - phase;
    const distortion = settings.distortion * settings.scale;

    return {
      x: width * (x + Math.cos(wave) * orbitX * distortion + Math.sin(counterWave) * 0.08),
      y: height * (y + Math.sin(wave) * orbitY * distortion + Math.cos(counterWave) * 0.09),
      radius: Math.max(width, height) * radius * settings.scale,
    };
  }

  function paintBlob(color, point, stops) {
    const gradient = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius);
    stops.forEach(([offset, alpha]) => {
      gradient.addColorStop(offset, colorWithAlpha(color, alpha));
    });
    context.fillStyle = gradient;
    context.fillRect(-point.radius, -point.radius, width + point.radius * 2, height + point.radius * 2);
  }

  function paintOvalBlob(color, point, scaleX, scaleY, rotation, stops) {
    context.save();
    context.translate(point.x, point.y);
    context.rotate(rotation);
    context.scale(scaleX, scaleY);

    const gradient = context.createRadialGradient(0, 0, 0, 0, 0, point.radius);
    stops.forEach(([offset, alpha]) => {
      gradient.addColorStop(offset, colorWithAlpha(color, alpha));
    });
    context.fillStyle = gradient;
    context.fillRect(-point.radius, -point.radius, point.radius * 2, point.radius * 2);
    context.restore();
  }

  function render(timestamp = 0) {
    if (startTime === null) startTime = timestamp;
    elapsed = (timestamp - startTime) * 0.001 * settings.speed;
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    context.clearRect(0, 0, width, height);

    const base = context.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, "#F8F9FA");
    base.addColorStop(0.48, "#FFFFFF");
    base.addColorStop(0.76, "#F2F4F6");
    base.addColorStop(1, "#D7D9DB");
    context.fillStyle = base;
    context.fillRect(0, 0, width, height);

    context.save();
    context.globalCompositeOperation = "source-over";
    context.filter = `blur(${Math.max(width, height) * 0.025}px)`;
    paintOvalBlob(colors.orange, meshPoint(0.3, 0.5, 0.52, Math.PI, 0.22, 0.25, 1.16), 1.45, 0.78, elapsed * 0.42 - 0.22, [[0, 0.82], [0.52, 0.34], [1, 0]]);
    paintOvalBlob(colors.orange, meshPoint(0.2, 0.72, 0.38, Math.PI + 1.35, 0.18, 0.18, 0.92), 1.25, 0.64, elapsed * -0.58 + 0.7, [[0, 0.48], [0.58, 0.18], [1, 0]]);
    paintOvalBlob(colors.orange, meshPoint(0.08, 0.32, 0.32, Math.PI - 0.95, 0.12, 0.16, 1.38), 0.8, 1.32, elapsed * 0.7 + 0.34, [[0, 0.4], [0.56, 0.14], [1, 0]]);
    paintBlob(colors.white, meshPoint(0.48, 0.38, 0.32, 2.1, 0.28, 0.3, 1.58), [[0, 0.72], [0.48, 0.26], [1, 0]]);
    paintBlob(colors.coolWhite, meshPoint(0.7, 0.54, 0.34, 3.4, 0.3, 0.26, 1.18), [[0, 0.68], [0.5, 0.24], [1, 0]]);
    context.restore();

    context.save();
    context.globalCompositeOperation = "multiply";
    context.filter = `blur(${Math.max(width, height) * 0.022}px)`;
    paintBlob(colors.grey, meshPoint(0.86, 0.48, 0.34, 1.2, 0.24, 0.24, 1.5), [[0, 0.34], [0.58, 0.14], [1, 0]]);
    paintBlob(colors.paleGrey, meshPoint(0.3, 0.25, 0.3, 4.2, 0.26, 0.2, 1.68), [[0, 0.24], [0.6, 0.1], [1, 0]]);
    context.restore();
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  const stopAnimation = createVisibleCanvasLoop(canvas, render);
  repaint = () => render(performance.now());

  return () => {
    stopAnimation();
    window.removeEventListener("resize", resize);
  };
}

if (nav && menuToggle) {
  setupMenu(nav, menuToggle);
}

if (nav) {
  setupNavHighlight(nav);
}

if (meshCanvas instanceof HTMLCanvasElement) {
  createMeshGradient(meshCanvas);
}

if (speakerMeshCanvas instanceof HTMLCanvasElement) {
  createSpeakerMeshGradient(speakerMeshCanvas);
}

hotelSliders.forEach(setupHotelSlider);

setupScrollReveal();
