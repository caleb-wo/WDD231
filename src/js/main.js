// STYLES
import "../css/style.css";
import { getParkData } from "./parkService.mjs";
import * as template from "./templates.mjs";
import * as headerFooter from "./setHeaderFooter.mjs";
// CREATE park object
async function initMain() {
    const parkData = await getParkData();
    // CREATE header
    headerFooter.setHeaderInfo(parkData);
    // CREATE intro
    template.parkIntroInfoTemplate();
    template.setParkIntro(parkData);
    // GENERATE intro and info sections
    const infoArray = template.getInfoLinks(parkData).map(cardInfo => template.mediaCardTemplate(cardInfo));
    template.setParkInfo(infoArray);
    // CREATE footer
    headerFooter.setFooterInfo(parkData);
  }
  document.addEventListener('DOMContentLoaded', initMain);