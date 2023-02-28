"use strict";
const audio = document.getElementsByTagName("audio");
const audioArray = Array.from(audio);
const handleKeyPress = (event) => {
    const targetKey = event.keyCode;
    console.log(targetKey);
    const keyElement = Array.from(document.querySelectorAll(`[data-key="${targetKey}"]`));
    keyElement[0].classList.add("playing");
    const audioElement = keyElement[1];
    audioElement.play();
    setTimeout(() => {
        keyElement[0].classList.remove("playing");
    }, 500);
};
document.addEventListener("keydown", handleKeyPress);
