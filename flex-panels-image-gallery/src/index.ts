const panels = document.querySelectorAll(".panel");

const toggleOpen = (e: Event) => {
  const target = e.currentTarget as HTMLElement;
  target.classList.toggle("open");
};

const toggleActive = (e: Event) => {
  const target = e.currentTarget as HTMLDivElement;
  if ((e as TransitionEvent).propertyName.includes("flex")) {
    target.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
