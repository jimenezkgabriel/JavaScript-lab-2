let shoppingList = [];

let addItem = (item) => {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
}

let removeLastItem = () => {
    shoppingList.pop();
}

let displayList = () => {
    console.log(shoppingList);
}