"use strict";
const panels = document.querySelectorAll(".panel");
const toggleOpen = (e) => {
    const target = e.currentTarget;
    target.classList.toggle("open");
};
const toggleActive = (e) => {
    const target = e.currentTarget;
    if (e.propertyName.includes("flex")) {
        target.classList.toggle("open-active");
    }
};
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
