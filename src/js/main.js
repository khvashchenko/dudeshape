const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__list-link");
const body = document.body;

function toggleMenu() {
  menuList.classList.toggle("menu__list--active");
  body.classList.toggle("menu-active");
}

menuBtn.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    menuList.classList.remove("menu__list--active");
    body.classList.remove("menu-active");

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
