
// Init Navigation Functions
export const initNav = () => {
    const arrowBtns = document.querySelectorAll(".arrowIcon");
    const submenus = document.querySelectorAll(".global-nav__split-button__toggle");
    // Dynamic Additions
    submenus.forEach((menu) => {
        menu.addEventListener("click", (ev) => {
            ev.currentTarget
                .closest("li")
                .querySelector(".global-nav__submenu")
                .classList.toggle("open");
        });
    });
    arrowBtns.forEach((btn) => {
        let rotated = false;

        btn.addEventListener("click", () => {
            rotated = !rotated;
            btn.style.transform = `rotate(${rotated ? 180 : 0}deg)`;
        });
    });
};