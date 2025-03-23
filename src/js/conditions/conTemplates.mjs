import { getParkData } from "../parkService.mjs";
import { getParkAlerts } from "../parkService.mjs";
import { getVisitorCenterData } from "../parkService.mjs";
import spritePath from '../../images/sprite.symbol.svg';
const parkData = getParkData();

export const buildAlerts = (data) => {
    const list = document.querySelector("#alertList");
    let category = data.category;
    const title = data.title;
    const desc = data.description; 
    if (category === "Park Closure") {
        category = "closure";
    }
    const html = `<li><svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="${spritePath}#alert-${category.toLowerCase()}"></use></svg>
    <div class="alertText"><h4 class="alert-${category.toLowerCase()}">${title}</h4><p>${desc}</p></div></li>`;

    list.insertAdjacentHTML("beforeend" ,html);
}

export const setVisitorCenterData = (data) => {
    const list = document.querySelector("#visitCenterList");
    const name = data.name;
    const id = data.id;
    const desc = data.description;
    const dir = data.directionsInfo;
    const html = `
    <li>
        <div class="visitorCenterInfoBox">
            <h4><a href="visitor-center.html?id=${id}">${name}</a></h4>
            <p>${desc}</p>
            <p>${dir}</p>
            <hr>
    </li>`; 
    list.insertAdjacentHTML("beforeend" ,html);
};

export const setActivities = (data) => {
    const list = document.querySelector("#activitiesList");
    const name = data.name;
    const html = `<li>${name}</li>`;
    list.insertAdjacentHTML("beforeend" ,html);
};

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