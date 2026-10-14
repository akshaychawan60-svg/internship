// Mini Project: Interactive Product Inventory and Analytics Dashboard
// This project uses variables, conditions, switch, loops, functions,
// arrays, objects, forEach(), filter(), and map().

// Start with the two products used in the project guide.
let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Decide which category a product belongs to.
function findCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

// Use switch to return the category label.
function getCategoryLabel(price) {
    const category = findCategory(price);

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Other";
    }
}

// Add together the prices of all products.
const calculateInventoryValue = function (products) {
    let total = 0;

    products.forEach(function (product) {
        total += product.price;
    });

    return total;
};

// This arrow function applies a percentage increase, such as tax.
const addPercentage = (amount, percentage = 0) => {
    const extraAmount = amount * percentage / 100;
    return amount + extraAmount;
};

// Display money with two decimal places.
function showMoney(amount) {
    return "$" + amount.toFixed(2);
}

// Refresh the product list and all calculations on the page.
function displayInventory() {
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = "";

    // forEach displays every product in the table.
    inventory.forEach(function (product) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = showMoney(product.price);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = getCategoryLabel(product.price);

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(categoryCell);
        inventoryList.appendChild(row);
    });

    const totalValue = calculateInventoryValue(inventory);
    const affordableProducts = inventory.filter(function (product) {
        return product.price < 200;
    });

    const formattedProducts = inventory.map(function (product) {
        return product.name.toUpperCase() + ": " + showMoney(product.price);
    });

    document.getElementById("total-value").textContent = showMoney(totalValue);
    document.getElementById("product-count").textContent = inventory.length;
    document.getElementById("affordable-count").textContent = affordableProducts.length;
    document.getElementById("affordable-products").textContent =
        affordableProducts.length > 0
            ? affordableProducts.map(function (product) {
                return product.name;
            }).join(", ")
            : "No affordable products.";

    const reportList = document.getElementById("formatted-report");
    reportList.innerHTML = "";

    formattedProducts.forEach(function (reportLine) {
        const listItem = document.createElement("li");
        listItem.textContent = reportLine;
        reportList.appendChild(listItem);
    });

    // Print the same information in the browser console for assignment review.
    console.log("--- Processing Inventory Roster (forEach) ---");
    inventory.forEach(function (product) {
        console.log("* Item: " + product.name + " (" + showMoney(product.price) +
            ") -> Category: " + getCategoryLabel(product.price));
    });

    console.log("--- Financial Analytics ---");
    console.log("Total Inventory Value: " + showMoney(totalValue));
    console.log("Filtered Affordable Items (Under $200): " +
        JSON.stringify(affordableProducts.map(function (product) {
            return product.name;
        })));
    console.log("Formatted Report List: " + JSON.stringify(formattedProducts));
}

// Handle the form when the user adds a product.
document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("product-name");
    const priceInput = document.getElementById("product-price");
    const message = document.getElementById("message");

    const productName = nameInput.value.trim();
    const productPrice = Number(priceInput.value);

    // Validate the name and price before adding anything.
    if (productName === "" || priceInput.value.trim() === "" ||
        !Number.isFinite(productPrice) || productPrice <= 0) {
        message.textContent = "Please enter a product name and a price greater than zero.";
        return;
    }

    // Search for a product with the same name. break stops the search when found.
    let alreadyExists = false;

    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index].name.toLowerCase() === productName.toLowerCase()) {
            alreadyExists = true;
            break;
        }
    }

    if (alreadyExists) {
        message.textContent = "That product is already in the inventory. Use a different name.";
        return;
    }

    inventory.push({
        name: productName,
        price: productPrice
    });

    message.textContent = productName + " was added successfully.";
    nameInput.value = "";
    priceInput.value = "";

    displayInventory();
});

// Demonstrate continue by skipping any invalid entries in a validation loop.
for (const product of inventory) {
    if (!product.name || product.price <= 0) {
        continue;
    }
}

// Show the initial inventory when the page first opens.
displayInventory();
