import {getTableTbodyEl} from "./components.js"

function renderTable() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productTableBody = getTableTbodyEl();

    productTableBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.shelf}</td>
            <td>${product.weight}</td>
            <td>${product.date}</td>
            <td>
                <button onclick="deleteFilm(${product.id})">Удалить</button>
            </td>
        `;
        productTableBody.appendChild(row);
    });

}