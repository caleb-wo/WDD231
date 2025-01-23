import { parkInfoTemplate } from "./templates.mjs";

export function setHeaderInfo(data) {
    // insert data into disclaimer section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
    document.querySelector("head > title").textContent = data.fullName;
    // set the banner image
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    // use the template function above to set the rest of the park specific info in the header
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

export const setFooterInfo = (data) => {
    document.querySelector("#park-footer").innerHTML = `
    <h3>Contact Information</h3>
    <h4>Mailing Address:</h4>
    <p>${data.addresses[1].line1}</p>
    <p>${data.addresses[1].city}, ${data.addresses[1].stateCode} ${data.addresses[1].postalCode}</p>
    <h4>Phone:</h4>
    <p>${data.contacts.phoneNumbers[0].phoneNumber}</p>
    `
}