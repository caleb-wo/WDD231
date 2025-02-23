import spritePath from '../images/sprite.symbol.svg';
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
        image: "",
        description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: "",
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: "",
        description: "Learn about the visitor centers in the park."
    }
];

export const getInfoLinks = (data) => {
    const withUpdateImages = parkInfoLinks.map((item, index) => {
        item.image = data.images[index + 2].url;
        return item;
      });
    return withUpdateImages;
}


export const mediaCardTemplate = (info) => {
    const template = `
    <img src="${info.image}">
    <h3>${info.name}</h3>
    <p>${info.description}</p>`
    ;
    return template;
}
  
  //ADD intro and info
  export const setParkIntro = (data) => {
    document.querySelector(".intro-container").innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>`
    ;
}

export const setParkInfo = (info) => {
    const addObj = document.querySelector(".info-container");
    const insertHTML = info.join("");
    addObj.insertAdjacentHTML("beforeend" , insertHTML);
}


export function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    
    // when the main menu button is clicked:
    menuButton.addEventListener("click", (ev) => {
      let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if ev.target is the button or something inside the button
    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
    if (document.querySelector(".global-nav").classList.contains("show")) {
      // if we opened it then set the aria-expanded attribute to true
      document.querySelector(".global-nav").classList.remove("slideOut");
      target.setAttribute("aria-expanded", true);
      document.querySelector(".global-closed-menu").style.display = "none";
      document.querySelector(".global-opened-menu").style.display = "flex";
      document.querySelector(".global-nav").style.display = "flex";
      document.querySelector(".global-nav").classList.add("slideIn");
      
    } else {
      // if we closed it then set the aria-expanded attribute to false
      target.setAttribute("aria-expanded", false);
      document.querySelector(".global-opened-menu").style.display = "none";
      document.querySelector(".global-closed-menu").style.display = "flex";
      document.querySelector(".global-nav").classList.remove("slideIn");
      document.querySelector(".global-nav").classList.add("slideOut");
      document.querySelector(".global-nav").style.display = "hidden";
    }
  
    console.log("toggle");
    });
  }