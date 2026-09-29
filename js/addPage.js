import { getFormEl, getInputEl, getPageEl, getTitleEl, getButtonAddEl } from "./components.js";
import { navigate } from "./navigate.js";

export function createAddPage(containerEl) {
    const pageEl = getPageEl();

    const titleEl = getTitleEl("Добавить запись");

    const formEl = getFormEl();

    let nameEl = getInputEl("text", "name", "Название")
    let shelfEl = getInputEl("text", "polka", "Полка")
    let weightEl = getInputEl("number", "weight", "Вес")
    let dateEl = getInputEl("text", "storage", "дд.мм.гггг")

    const buttonAddEl = getButtonAddEl("Добавить запись");

    formEl.append(nameEl, shelfEl, weightEl, dateEl)

    buttonAddEl.addEventListener("click", function(){
            navigate("home")
    })

    pageEl.append(titleEl, formEl, buttonAddEl )

    containerEl.append(pageEl)
}