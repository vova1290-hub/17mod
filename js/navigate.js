import  createAddPage  from "./addPage.js";
import  createHomePage  from "./homeCard.js";

export default function navigate(pageName) {
    const appEl = document.getElementById("app");
    appEl.innerHTML = '';

    if (pageName === "addPage") {
        createAddPage(appEl);
    } else {
        createHomePage(appEl);
    }
}