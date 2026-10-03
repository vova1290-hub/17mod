import {renderTable} from "./renderTable.js"

function addproductToLocalStorage(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products));

    renderTable();
}