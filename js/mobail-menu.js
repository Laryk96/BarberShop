(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");

  const menuBtnclose = document.querySelector("[data-mobile-menu-close]");

  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
  menuBtnclose.addEventListener("click", () => {
    const expanded =
      menuBtnclose.getAttribute("aria-expanded") === "true" || false;

    menuBtnclose.classList.toggle("is-open");
    menuBtnclose.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
