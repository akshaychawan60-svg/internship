// Assignment 6: Arrays, Objects, and Core Methods

// Each product is an object with a name and a price.
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// forEach visits and prints every product.
console.log("-- All Products (forEach) --");

products.forEach(function (product) {
    console.log("Item: " + product.name + " - Price: $" + product.price);
});

// filter creates a new array containing products below $50.
console.log("\n-- Filtered Products (Price < $50) --");

const affordableProducts = products.filter(function (product) {
    return product.price < 50;
});

console.log(affordableProducts);

// map creates a new array with a formatted description for each product.
console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(function (product) {
    return product.name.toUpperCase() + " costs $" + product.price;
});

console.log(productTags);
