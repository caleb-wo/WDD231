import { getParkData } from "./parkService.mjs";
import { parkInfoLinks } from "./templates.mjs";
import { parkInfoTemplate } from "./templates.mjs";
const parkData = getParkData();



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

