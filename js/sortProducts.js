function dateToNumber(value) {
    const parts = String(value).split(".");
    return Number(parts[2] + parts[1] + parts[0]);
}

export default function sortProducts(products, field) {
    const sorted = products.slice();

    sorted.sort(function(a, b) {
        if (field === "weight") {
            return Number(b.weight) - Number(a.weight);
        }

        if (field === "date") {
            return dateToNumber(b.date) - dateToNumber(a.date);
        }

        return String(b[field]).localeCompare(String(a[field]), "ru");
    });

    return sorted;
}