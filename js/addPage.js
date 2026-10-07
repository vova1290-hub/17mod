import * as components from "./components.js";
import setupValidation from "./validate.js";

export default function createAddPage(containerEl) {
    const pageEl = components.getPageEl();
    const titleEl = components.getTitleEl("Добавить запись");
    const formEl = components.getFormEl();

    const nameEl = components.getInputEl("text", "name", "Название");
    const shelfEl = components.getInputEl("text", "polka", "Полка");
    const weightEl = components.getInputEl("number", "weight", "Вес");
    const dateEl = components.getInputEl("text", "storage", "дд.мм.гггг");
    const buttonAddEl = components.getButtonAddEl("Добавить запись");

    nameEl.classList.add("name");
    shelfEl.classList.add("shelf");
    weightEl.classList.add("weight");
    dateEl.classList.add("date");

    formEl.append(nameEl, shelfEl, weightEl, dateEl, buttonAddEl);

    setupValidation(formEl);

    pageEl.append(titleEl, formEl);
    containerEl.append(pageEl);
}