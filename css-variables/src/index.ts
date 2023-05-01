const spacingSelector = document.querySelector("#spacing");
const blurSelector = document.querySelector("#blur");
const colorSelector = document.querySelector("#base");
const body = document.querySelector("body");
const image = document.querySelector("img")!;

const bodyStyleVariables = body && getComputedStyle(body);

const setSpacing = (e: Event) => {
  const target = e.target as HTMLInputElement;
  document.documentElement.style.setProperty(
    `--spacingVar`,
    `${target.value}px`
  );
};

const setBlur = (e: Event) => {
  const target = e.target as HTMLInputElement;
  document.documentElement.style.setProperty(`--blurVar`, `${target.value}px`);
};

const setColor = (e: Event) => {
  const target = e.target as HTMLInputElement;
  console.log(target.value);
  document.documentElement.style.setProperty(`--baseColor`, `${target.value}`);
};

spacingSelector?.addEventListener("change", setSpacing);
blurSelector?.addEventListener("change", setBlur);
colorSelector?.addEventListener("input", setColor);
