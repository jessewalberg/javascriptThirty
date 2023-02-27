"use strict";
const keys = document.getElementsByClassName("key");
const audio = document.getElementsByTagName("audio");
const keysArray = Array.from(keys);
console.log(keysArray);
const audioArray = Array.from(audio);
console.log(audioArray);
keysArray.forEach((key) => {
    if (key instanceof HTMLElement) {
        console.log(key.dataset.key);
    }
    key.addEventListener("keydown", (event) => { });
});
