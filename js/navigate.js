import { getLoaderEl } from "./components.js";

export async function navigate(pageName) {
    const appEl = document.getElementById("app");
    appEl.innerHTML = '';

    const loaderEl = getLoaderEl()
    appEl.append(loaderEl)

    if (pageName === "addPage") {
        const addPage = await import("./addPage.js")
        addPage.default(appEl)
        loaderEl.remove()
    } else {
        const homeCard = await import("./homeCard.js")
        homeCard.default(appEl)
        loaderEl.remove()
    }
}