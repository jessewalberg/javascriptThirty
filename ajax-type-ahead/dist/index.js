"use strict";
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const findMatches = (wordToMatch, cities) => {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
};
const renderMatches = (matches) => {
    const suggestionDefault = '<ul class="suggestions"><li>Filter for a city</li><li>or a state</li></ul>';
    const html = matches
        .map((place) => {
        const regex = new RegExp(searchInput.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        return `
            <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
            </li>
        `;
    })
        .join(" ");
    suggestions.innerHTML =
        matches.length === 1000 || matches.length === 0 ? suggestionDefault : html;
};
searchInput.addEventListener("input", (e) => {
    const target = e.target;
    const matches = findMatches(target.value, cities);
    renderMatches(matches);
});
