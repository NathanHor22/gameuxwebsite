const SELECTORS = {
  nav: "[data-nav]",
  menuToggle: "[data-menu-toggle]",
  hotelSliders: "[data-hotel-slider]",
  speakerSliders: "[data-speaker-slider]",
  dragScrollAreas: "[data-drag-scroll]",
};

const nav = document.querySelector(SELECTORS.nav);
const menuToggle = document.querySelector(SELECTORS.menuToggle);
const hotelSliders = Array.from(document.querySelectorAll(SELECTORS.hotelSliders));
const speakerSliders = Array.from(document.querySelectorAll(SELECTORS.speakerSliders));
const dragScrollAreas = Array.from(document.querySelectorAll(SELECTORS.dragScrollAreas));

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
    const clickX = event.clientX;
    const sliderMidpoint = sliderRect.left + sliderRect.width / 2;

    if (currentPage === 0 && (cardRect.right > sliderRect.right + 1 || clickX > sliderMidpoint)) {
      setPage(1);
    }

    if (currentPage === 1 && (cardRect.left < sliderRect.left - 1 || clickX < sliderMidpoint)) {
      setPage(0);
    }
  });

  setPage(Number(slider.dataset.hotelPage));
}

function setupSpeakerSlider(slider) {
  const pagination = slider.parentElement?.querySelector("[data-speaker-pagination]");
  if (!pagination) return;

  let buttons = [];
  let pageCount = 0;
  let frame = 0;

  function getMaxScroll() {
    return Math.max(0, slider.scrollWidth - slider.clientWidth);
  }

  function getActivePage() {
    const maxScroll = getMaxScroll();
    if (!maxScroll || pageCount < 2) return 0;
    return Math.round((slider.scrollLeft / maxScroll) * (pageCount - 1));
  }

  function updateActivePage() {
    const activePage = getActivePage();
    buttons.forEach((button, index) => {
      const isActive = index === activePage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });
  }

  function scrollToPage(page) {
    const maxScroll = getMaxScroll();
    const left = pageCount > 1 ? (maxScroll * page) / (pageCount - 1) : 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slider.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function renderPagination() {
    const nextPageCount = Math.max(1, Math.ceil(slider.scrollWidth / slider.clientWidth));
    if (nextPageCount !== pageCount) {
      pageCount = nextPageCount;
      pagination.replaceChildren();
      buttons = Array.from({ length: pageCount }, (_, index) => {
        const button = document.createElement("button");
        button.className = "speaker-dot";
        button.type = "button";
        button.setAttribute("aria-label", `Show speaker group ${index + 1} of ${pageCount}`);
        button.addEventListener("click", () => scrollToPage(index));
        pagination.append(button);
        return button;
      });
    }

    pagination.hidden = pageCount < 2;
    updateActivePage();
  }

  slider.addEventListener("scroll", () => {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(updateActivePage);
  }, { passive: true });

  if ("ResizeObserver" in window) {
    new ResizeObserver(renderPagination).observe(slider);
  } else {
    window.addEventListener("resize", renderPagination);
  }

  renderPagination();
}

function setupDragScroll(scroller) {
  let isMouseDown = false;
  let hasDragged = false;
  let suppressClick = false;
  let startX = 0;
  let startScrollLeft = 0;
  const dragThreshold = 3;

  scroller.querySelectorAll("img").forEach((image) => {
    image.draggable = false;
    image.setAttribute("draggable", "false");
  });

  function stopDrag() {
    if (!isMouseDown) return;

    isMouseDown = false;
    scroller.classList.remove("is-dragging");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", stopDrag);

    if (hasDragged) {
      suppressClick = true;
      window.setTimeout(() => {
        suppressClick = false;
      }, 200);
    }
  }

  function handleMouseMove(event) {
    if (!isMouseDown) return;

    const deltaX = event.clientX - startX;
    if (!hasDragged && Math.abs(deltaX) < dragThreshold) {
      return;
    }

    if (!hasDragged) {
      hasDragged = true;
      scroller.classList.add("is-dragging");
    }

    scroller.scrollLeft = startScrollLeft - deltaX;
    event.preventDefault();
  }

  scroller.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;

    isMouseDown = true;
    hasDragged = false;
    startX = event.clientX;
    startScrollLeft = scroller.scrollLeft;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
  });

  scroller.addEventListener("click", (event) => {
    if (!suppressClick) return;

    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);

  scroller.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
}

if (nav && menuToggle) {
  setupMenu(nav, menuToggle);
}

hotelSliders.forEach(setupHotelSlider);
speakerSliders.forEach(setupSpeakerSlider);
dragScrollAreas.forEach(setupDragScroll);
