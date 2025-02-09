// STYLES
import "../../css/style.css";
import { getParkAlerts, getParkData ,getVisitorCenterData ,getActivitiesData } from "../parkService.mjs";
import * as template from "./conTemplates.mjs";
import * as headerFooter from "../setHeaderFooter.mjs";
// CREATE park object
async function initConditions() {
    const parkData = await getParkData("yell");
    // CREATE header
    headerFooter.setHeaderInfo(parkData);
    // GENERATE intro and info sections
    // CREATE footer
    headerFooter.setFooterInfo(parkData);
    // ALERTS
    const parkAlerts = await getParkAlerts("yell"); 
    parkAlerts.forEach(alert => template.buildAlerts(alert));
    // VISITOR center data
    const visitorCenterData = await getVisitorCenterData("yell");
    visitorCenterData.forEach(center => template.setVisitorCenterData(center));
    // ACTIVITES data
    const activitiesData = await getActivitiesData(parkData);
    console.log(activitiesData);
    activitiesData.forEach(activity => template.setActivities(activity));
  }
  document.addEventListener('DOMContentLoaded', initConditions);