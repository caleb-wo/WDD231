import { getParkData } from "../parkService.mjs";
import { getParkAlerts } from "../parkService.mjs";
import { getVisitorCenterData } from "../parkService.mjs";
const parkData = getParkData();

export const buildAlerts = (data) => {
    const list = document.querySelector("#alertList");
    let category = data.category;
    const title = data.title;
    const desc = data.description; 
    if (category === "Park Closure") {
        category = "closure";
    }
    const html = `<li><svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="../../images/sprite.symbol.svg#alert-${category.toLowerCase()}"></use></svg>
    <div class="alertText"><h4 class="alert-${category.toLowerCase()}">${title}</h4><p>${desc}</p></div></li>`;

    list.insertAdjacentHTML("beforeend" ,html);
}

export const setVisitorCenterData = (data) => {
    const list = document.querySelector("#visitCenterList");
    const name = data.name;
    const desc = data.desc;
    const dir = data.directionsInfo;
    const html = `
    <li>
        <div class="visitorCenterInfoBox">
            <h4>${name}</h4>
            <p>${desc}</p>
            <p>${dir}</p>
            <hr>
    </li>` 
    list.insertAdjacentHTML("beforeend" ,html);
}