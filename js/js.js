let shoppingLists = [
    ["молоко", "вода", "хлеб"],
    ["огурцы", "помидоры", "макароны"],
    ["рыба", "мясо", "сахар"]
];

for (let i = 0; i < shoppingLists.length; i++) {
    let lengthInnerArray = shoppingLists[i];
    document.write("Список ", i + 1, "<br>");
    document.write("-----------", "<br>");
    for (let j = 0; j < lengthInnerArray.length; j++) {
        let product = lengthInnerArray[j];
        document.write(j + 1, " - ", product, "<br>");
    }
    document.write("<br>");
}

