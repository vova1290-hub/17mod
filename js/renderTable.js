import {getTableTbodyEl} from "./components.js"
import {deleteProduct} from "./deleteProduct.js"

export function renderTable(productTableBody) {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    productTableBody.innerHTML = "";

    products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.shelf}</td>
            <td>${product.weight}</td>
            <td>${product.date}</td>
            <td>
                <button onclick="deleteProduct(${product.id})">Удалить</button>
            </td>
        `;
        productTableBody.appendChild(row);
    });
}