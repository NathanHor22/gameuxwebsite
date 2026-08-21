(() => {
  const tabs = Array.from(document.querySelectorAll("[data-program-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-program-panel]"));

  if (!tabs.length || !panels.length) return;

  const activate = (tab, updateHash = true) => {
    const targetId = tab.dataset.programTab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.setAttribute("aria-selected", String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });

    if (updateHash) {
      history.replaceState(null, "", `#${targetId}`);
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextTab = tabs[(index + direction + tabs.length) % tabs.length];
      activate(nextTab);
      nextTab.focus();
    });
  });

  const requestedDay = new URLSearchParams(window.location.search).get("day");
  const initialTab = tabs.find((tab) => tab.dataset.programTab === requestedDay)
    || tabs.find((tab) => `#${tab.dataset.programTab}` === window.location.hash)
    || tabs[0];
  activate(initialTab, false);

  if (requestedDay) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
    });
  }
})();
