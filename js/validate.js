import { getInputEl, getFormEl } from "./components.js";
import {addProductToLocalStorage} from "./productsLocal.js"

const validate = new JustValidate('.form')

const nameEl = getInputEl("text", "name", "Название");
const shelfEl = getInputEl("text", "polka", "Полка");
const weightEl = getInputEl("number", "weight", "Вес");
const dateEl = getInputEl("text", "storage", "дд.мм.гггг");

nameEl.classList.add("name")
shelfEl.classList.add("shelf")
weightEl.classList.add("weight")
dateEl.classList.add("date")


validate.addField('.name', [
    {
        rule: 'required',
        errorMessage: 'введите название',
    },
]);

validate.addField('.shelf', [
    {
        rule: 'required',
        errorMessage: 'введите номер полки',
    },
]);

validate.addField('.weight', [
    {
        rule: 'required',
        errorMessage: 'введите вес',
    },
    {
        rule: 'number',
        errorMessage: 'только числа',
    },
]);

validate.addField('.weight', [
    {
        rule: 'required',
        errorMessage: 'введите дату',
    },
    {
        rule: 'customRegexp', 
        value: /^\d{2}\.\d{2}\.\d{4}$/,
        errorMessage: 'Формат должен быть ДД.ММ.ГГГГ',
  },
]);

validate.onSuccess(function() {
    const name = document.querySelector('.name').value;
    const shelf = document.querySelector('.shelf').value;
    const weight = document.querySelector('.weight').value;
    const date = document.querySelector('.date').checked;
    const form = getFormEl();

    const product = {
        id: Math.random(),
        name: name,
        shelf: shelf,
        weight: weight,
        date: date,
    };

    addFilmToLocalStorage(product);

    form.reset();
})





