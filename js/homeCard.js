import { navigate } from "./navigate.js";
import { renderTable } from "./renderTable.js";
import { getPageEl, getCenterWrapEl, getTitleEl, getButtonAddEl, getTableEl, getHeadEl, getTableTbodyEl } from "./components.js"

export function createHomePage(containerEl) {
    const pageEl = getPageEl();

    const titleWrapEl = getCenterWrapEl();

    const titleEl = getTitleEl("Склад");

    const buttonAddEl = getButtonAddEl("Добавить запись");

    const tableEl = getTableEl()

    tableEl.append(getHeadEl());            
    tableEl.append(getTableTbodyEl());      

    titleWrapEl.append(titleEl);
    titleWrapEl.append(buttonAddEl);

    buttonAddEl.addEventListener("click", function(){
        navigate("addPage")
    })

    pageEl.append(titleWrapEl, tableEl )

    containerEl.append(pageEl)

    renderTable()
}