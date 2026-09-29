import { createHomePage } from "./homeCard";

export function navigate(pageName) {
    const appEl = document.getElementById("app");
    appEl.innerHTML = '';

    if (pageName === "addPage") {
        createAddPage(appEl);
    } else {
        createHomePage(appEl);
    }
}