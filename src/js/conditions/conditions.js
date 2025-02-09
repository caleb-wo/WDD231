// STYLES
import "../../css/style.css";
import { getParkAlerts, getParkData ,getVisitorCenterData } from "../parkService.mjs";
import * as template from "./conTemplates.mjs";
import * as headerFooter from "../setHeaderFooter.mjs";
// CREATE park object
async function initConditions() {
    const parkData = await getParkData();
    // CREATE header
    headerFooter.setHeaderInfo(parkData);
    // GENERATE intro and info sections
    // CREATE footer
    headerFooter.setFooterInfo(parkData);
    // ALERTS
    const parkAlerts = await getParkAlerts(); 
    parkAlerts.forEach(template.buildAlerts(alert));
    // VISITOR center data
    const visitorCenterData = getVisitorCenterData("yell");
    visitorCenterData.forEach(template.setVisitorCenterData(center));
  }
  document.addEventListener('DOMContentLoaded', initConditions);