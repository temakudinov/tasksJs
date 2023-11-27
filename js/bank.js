let money = 200;


const priceProductString = window.prompt("How much does the product cost?");
const priceProduct = Number(priceProductString);


if (isNaN(priceProduct)) {
    document.write("Incorrect number");
} else {
    if (money >= priceProduct) {
        document.write("Product purchased");
        money = money - priceProduct;

    } else {
        document.write("Product not purchased");
    }
}







document.write("<br>", "Balance: ", money);