import { getFormEl, getInputEl, getPageEl, getTitleEl, getButtonAddEl } from "./components.js";
import { setupValidation } from "./validate.js";

export function createAddPage(containerEl) {
    const pageEl = getPageEl();
    const titleEl = getTitleEl("Добавить запись");
    const formEl = getFormEl();

    const nameEl = getInputEl("text", "name", "Название");
    const shelfEl = getInputEl("text", "polka", "Полка");
    const weightEl = getInputEl("number", "weight", "Вес");
    const dateEl = getInputEl("text", "storage", "дд.мм.гггг");
    const buttonAddEl = getButtonAddEl("Добавить запись");

    nameEl.classList.add("name");
    shelfEl.classList.add("shelf");
    weightEl.classList.add("weight");
    dateEl.classList.add("date");

    formEl.append(nameEl, shelfEl, weightEl, dateEl, buttonAddEl);

    setupValidation(formEl);

    pageEl.append(titleEl, formEl);
    containerEl.append(pageEl);
}