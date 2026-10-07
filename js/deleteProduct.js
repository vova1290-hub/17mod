import renderTable from "./renderTable.js"

export default function deleteProduct(id, productTableBody) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products = products.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    renderTable(productTableBody);
}