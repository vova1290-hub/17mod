function getPageEl() {
    const pageEl = document.createElement("div")
    pageEl.classList.add("page-wrap")
    return pageEl
}

function getCenterWrapEl() {
    const titleWrapEl = document.createElement("div")
    titleWrapEl.classList.add("center-wrap")
    return titleWrapEl
}

function getTitleEl(text) {
    const titleEl = document.createElement("h1")
    titleEl.textContent = text
    titleEl.classList.add("title")
    return titleEl
}

function getButtonAddEl(text) {
    const buttonAddEl = document.createElement("button")
    buttonAddEl.textContent = text
    buttonAddEl.classList.add("button-add")
    return buttonAddEl
}

function getButtonDeleteEl(text) {
    const buttonDeleteEl = document.createElement("button")
    buttonDeleteEl.textContent = text
    buttonDeleteEl.classList.add("button-delete")
    return buttonDeleteEl
}

function getFormEl() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    return formEl
}

function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("input")
    return inputEl
}

function getTableEl() {
    const tableEl = document.createElement("table")
    tableEl.id = "table"
    return tableEl
}

function getThEl(text) {
    const thEl = document.createElement("th");
    thEl.classList.add("table-th");
    thEl.textContent = text;
    return thEl;
}

function getHeadRowEl() {
    const trEl = document.createElement("tr");
    trEl.classList.add("table-head-row");

    trEl.append(getThEl("Название"));
    trEl.append(getThEl("полка"));
    trEl.append(getThEl("вес"));
    trEl.append(getThEl("Время хранения"));
    trEl.append(getThEl(""));

    return trEl;
}

function getHeadEl() {
    const theadEl = document.createElement("thead")
    theadEl.classList.add("thead")
    theadEl.append(getHeadRowEl())
    return theadEl
}

function getTableTbodyEl() {
    const tableTbodyEl = document.createElement("tbody")
    tableTbodyEl.id = "table-tbody"
    return tableTbodyEl
}

function getLoaderEl() {
    const loaderEl = document.createElement("div")
    loaderEl.classList.add("loader")

    for (let i = 1; i <= 8; i++) {
        const divEl = document.createElement("div")
        loaderEl.append(divEl)
    }

    return loaderEl
}

export {
    getPageEl,
    getCenterWrapEl,
    getTitleEl,
    getButtonAddEl,
    getButtonDeleteEl,
    getFormEl,
    getInputEl,
    getTableEl,
    getThEl,
    getHeadRowEl,
    getHeadEl,
    getTableTbodyEl,
    getLoaderEl
}
