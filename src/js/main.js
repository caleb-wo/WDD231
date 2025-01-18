import { getParkData } from "./parkService.mjs";
import * as template from "./templates.mjs";
import * as injection from "./injections.mjs";
import * as headerFooter from "./setHeaderFooter.mjs";
// CREATE park object
const parkData = getParkData();
// CREATE header
headerFooter.setHeaderInfo(parkData);
// CREATE intro
template.parkIntroInfoTemplate();
injection.setParkIntro(parkData);
// GENERATE intro and info sections
const infoArray = template.parkInfoLinks.map(cardInfo => template.mediaCardTemplate(cardInfo));
injection.setParkInfo(infoArray);
// CREATE footer
headerFooter.setFooterInfo(parkData);