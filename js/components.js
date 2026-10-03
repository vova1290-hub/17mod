export function getPageEl() {
    const pageEl = document.createElement("div")
    pageEl.classList.add("page-wrap")
    return pageEl
}

export function getCenterWrapEl() {
    const titleWrapEl = document.createElement("div")
    titleWrapEl.classList.add("center-wrap")
    return titleWrapEl
}

export function getTitleEl(text) {
    const titleEl = document.createElement("h1")
    titleEl.textContent = text
    titleEl.classList.add("title")
    return titleEl
}

export function getButtonAddEl(text) {
    const buttonAddEl = document.createElement("button")
    buttonAddEl.textContent = text
    buttonAddEl.classList.add("button-add")
    return buttonAddEl
}

export function getButtonDeleteEl(text) {
    const buttonDeleteEl = document.createElement("button")
    buttonDeleteEl.textContent = text
    buttonDeleteEl.classList.add("button-delete")
    return buttonDeleteEl
}

export function getFormEl() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    return formEl
}

export function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("input")
    return inputEl
}

export function getTableEl() {
    const tableEl = document.createElement("table")
    tableEl.id = "table"
    return tableEl
}

export function getThEl(text) {
    const thEl = document.createElement("th");
    thEl.classList.add("table-th");
    thEl.textContent = text;
    return thEl;
}

export function getHeadRowEl() {
    const trEl = document.createElement("tr");
    trEl.classList.add("table-head-row");

    trEl.append(getThEl("Название"));
    trEl.append(getThEl("полка"));
    trEl.append(getThEl("вес"));
    trEl.append(getThEl("Время хранения"));
    trEl.append(getThEl(""));

    return trEl;
}

export function getHeadEl() {
    const theadEl = document.createElement("thead")
    theadEl.classList.add("thead")
    theadEl.append(getHeadRowEl())
    return theadEl
}

export function getTableTbodyEl() {
    const currentEl = document.getElementById("table-tbody")
    if (currentEl) {
        return currentEl
    }

    const tableTbodyEl = document.createElement("tbody")
    tableTbodyEl.id = "table-tbody"
    return tableTbodyEl
}