const SELECTORS = {
  nav: "[data-nav]",
  menuToggle: "[data-menu-toggle]",
  hotelSliders: "[data-hotel-slider]",
};

const nav = document.querySelector(SELECTORS.nav);
const menuToggle = document.querySelector(SELECTORS.menuToggle);
const hotelSliders = Array.from(document.querySelectorAll(SELECTORS.hotelSliders));

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

if (nav && menuToggle) {
  setupMenu(nav, menuToggle);
}

hotelSliders.forEach(setupHotelSlider);
