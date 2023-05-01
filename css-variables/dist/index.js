"use strict";
const spacingSelector = document.querySelector("#spacing");
const blurSelector = document.querySelector("#blur");
const colorSelector = document.querySelector("#base");
const body = document.querySelector("body");
const image = document.querySelector("img");
const bodyStyleVariables = body && getComputedStyle(body);
const setSpacing = (e) => {
    const target = e.target;
    document.documentElement.style.setProperty(`--spacingVar`, `${target.value}px`);
};
const setBlur = (e) => {
    const target = e.target;
    document.documentElement.style.setProperty(`--blurVar`, `${target.value}px`);
};
const setColor = (e) => {
    const target = e.target;
    console.log(target.value);
    document.documentElement.style.setProperty(`--baseColor`, `${target.value}`);
};
spacingSelector === null || spacingSelector === void 0 ? void 0 : spacingSelector.addEventListener("change", setSpacing);
blurSelector === null || blurSelector === void 0 ? void 0 : blurSelector.addEventListener("change", setBlur);
colorSelector === null || colorSelector === void 0 ? void 0 : colorSelector.addEventListener("input", setColor);
