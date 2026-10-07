import  {navigate}  from "./navigate.js";
import  renderTable  from "./renderTable.js";
import * as components from "./components.js"

export default function createHomePage(containerEl) {
    const pageEl = components.getPageEl();
    const titleWrapEl = components.getCenterWrapEl();
    const titleEl = components.getTitleEl("Склад");
    const buttonAddEl = components.getButtonAddEl("Добавить запись");
    const tableEl = components.getTableEl();
    const tableTbodyEl = components.getTableTbodyEl();
    const headEl = components.getHeadEl();

    tableEl.append(headEl, tableTbodyEl);
    titleWrapEl.append(titleEl, buttonAddEl);

    buttonAddEl.addEventListener("click", function() {
        navigate("addPage");
    });

    headEl.addEventListener("click", function(event) {
        const field = event.target.dataset.field;
        if (!field) {
            return;
        }
        renderTable(tableTbodyEl, field);
    });

    pageEl.append(titleWrapEl, tableEl);
    containerEl.append(pageEl);

    renderTable(tableTbodyEl);
}