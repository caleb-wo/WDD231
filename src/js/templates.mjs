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
  
  export function visitorCenterTemplate(center) {
    return `<li class="visitor-center">
    <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </li>`;
  }
  
  export function activityListTemplate(activities) {
    return activities.map((activity) => `<li>${activity.name}</li>`).join("");
  }
  
  export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="/images/sprite.symbol.svg#${iconId}"
              ></use>
            </svg>`;
  }
  
  export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
    return `<details name="vc-details" id="${elementId}">
            <summary>
              ${iconTemplate(iconId)}
              ${summaryText}
            </summary>
            ${content}
          </details>`;
  }
  
  export function vcTitleTemplate(text) {
    return `${iconTemplate("ranger-station")} ${text}`;
  }
  
  export function vcInfoTemplate(data) {
    const image = data.images[0];
    return `<figure>
            <img src="${image.url}" alt="${image.altText}" />
            <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
          </figure>
          <p>${data.description}</p>`;
  }
  export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join("")}</ul>`;
  }
  
  function vcAddressTemplate(data) {
    return `<section>
              <h3>${data.type} Address</h3>
              <address>
                ${data.line1}<br />
                ${data.city}, ${data.stateCode} ${data.postalCode}
              </address>
            </section>`;
  }
  
  export function vcAddressesListTemplate(data) {
    const physical = data.find((address) => address.type === "Physical");
    const mailing = data.find((address) => address.type === "Mailing");
    let html = vcAddressTemplate(physical);
    if (mailing) {
      html += vcAddressTemplate(mailing);
    }
    return html;
  }
  export function vcAmenityTemplate(data) {
    return `<li>${data}</li>`;
  }
  export function vcDirectionsTemplate(data) {
    return `<p>${data}</p>`;
  }
  export function vcContactsTemplate(data) {
    return `<section class="vc-contact__email">
              <h3>Email Address</h3>
              <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
            </section>
            <section class="vc-contact__phone">
              <h3>Phone numbers</h3>
              <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
            </section>`;
  }
  
  export function vcImageTemplate(data) {
    return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
  }