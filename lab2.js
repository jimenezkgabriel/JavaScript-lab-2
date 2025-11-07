let shoppingList = [];

let addItem = (item) => {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
    return `${item} already exists in the list`
}

let removeLastItem = () => {
    shoppingList.pop();
}

let displayList = () => {
    console.log(shoppingList);
}

let filterItems = (term) => {
    return shoppingList.filter((item) => {
        return term == item;
    })
}


let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let shopList = document.getElementById("shoppingList");

addItemButton.addEventListener("click", function () {
    let item = itemInput.value;

    if (item === "") {
        alert("Please enter an item.");
        return;
    }

    shoppingList.push(item); // Add item to cart array
    renderList();
    itemInput.value = ""; // Clear the input field
});

removeItemButton.addEventListener("click", function () {
    shoppingList.pop(); // Remove last item from cart array
    renderList();
});

function renderList() {
    shopList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < shoppingList.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = shoppingList[i];
        shopList.appendChild(listItem);
    }
}