import deleteProduct from "./deleteProduct.js";
import sortProducts from "./sortProducts.js";

let sortField = "";

export default function renderTable(productTableBody, field) {
    if (field) {
        sortField = field;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (sortField) {
        products = sortProducts(products, sortField);
    }

    productTableBody.innerHTML = "";

    products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.shelf}</td>
            <td>${product.weight}</td>
            <td>${product.date}</td>
            <td></td>
        `;

        const deleteButtonEl = document.createElement("button");
        deleteButtonEl.textContent = "Удалить";
        deleteButtonEl.addEventListener("click", function() {
            deleteProduct(product.id, productTableBody);
        });

        row.querySelector("td:last-child").append(deleteButtonEl);
        productTableBody.appendChild(row);
    });
}