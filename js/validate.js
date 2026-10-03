import { addProductToLocalStorage } from "./productsLocal.js";
import { navigate } from "./navigate.js";

export function setupValidation(formEl) {
    const validate = new JustValidate(formEl);

    validate.addField(".name", [
        {
            rule: "required",
            errorMessage: "введите название",
        },
    ]);

    validate.addField(".shelf", [
        {
            rule: "required",
            errorMessage: "введите номер полки",
        },
    ]);

    validate.addField(".weight", [
        {
            rule: "required",
            errorMessage: "введите вес",
        },
        {
            rule: "number",
            errorMessage: "только числа",
        },
    ]);

    validate.addField(".date", [
        {
            rule: "required",
            errorMessage: "введите дату",
        },
        {
            rule: "customRegexp",
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            errorMessage: "Формат должен быть ДД.ММ.ГГГГ",
        },
    ]);

    validate.onSuccess(function() {
        const product = {
            id: Math.random(),
            name: formEl.querySelector(".name").value,
            shelf: formEl.querySelector(".shelf").value,
            weight: formEl.querySelector(".weight").value,
            date: formEl.querySelector(".date").value,
        };

        addProductToLocalStorage(product);
        formEl.reset();
        navigate("home");
    });
}