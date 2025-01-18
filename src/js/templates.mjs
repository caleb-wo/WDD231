import { getParkData } from "./parkService.mjs";
const parkData = getParkData();

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

//GENERATE intro for park.
export const parkIntroInfoTemplate = () => {
    const main = document.querySelector("#main");
    main.innerHTML = `
    <section class="intro-container"></section>
    <section class="info-container"></section>
    `
}

export const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
];

export const mediaCardTemplate = (info) => {
    const template = `
    <img src="${info.image}">
    <h3>${info.name}</h3>
    <p>${info.description}</p>`
    ;
    return template;
}
  