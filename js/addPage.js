import { getFormEl, getInputEl, getPageEl, getTitleEl, getButtonAddEl } from "./components.js";
import { navigate } from "./navigate.js";
import { addProductToLocalStorage } from "./productsLocal.js";

export function createAddPage(containerEl) {
    const pageEl = getPageEl();
    const titleEl = getTitleEl("Добавить запись");
    const formEl = getFormEl();

    const nameEl = getInputEl("text", "name", "Название");
    const shelfEl = getInputEl("text", "polka", "Полка");
    const weightEl = getInputEl("number", "weight", "Вес");
    const dateEl = getInputEl("text", "storage", "дд.мм.гггг");
    const buttonAddEl = getButtonAddEl("Добавить запись");

    formEl.append(nameEl, shelfEl, weightEl, dateEl, buttonAddEl);

    formEl.addEventListener("submit", function(event) {
        event.preventDefault();

        addProductToLocalStorage({
            name: nameEl.value,
            shelf: shelfEl.value,
            weight: weightEl.value,
            date: dateEl.value,
        });

        navigate("home");
    });

    pageEl.append(titleEl, formEl);
    containerEl.append(pageEl);
}