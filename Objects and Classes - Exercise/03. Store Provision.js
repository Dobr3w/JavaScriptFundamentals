function store(stock, orderedProducts) {

    let product = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let productQuantity = Number(stock[i + 1]);

        product[productName] = productQuantity;
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let productName = orderedProducts[j];
        let productQuantity = Number(orderedProducts[j + 1]);

        if (productName in product) {
            product[productName] += productQuantity;
        } else {
            product[productName] = productQuantity;
        }
    }

    let kvp = Object.entries(product);

    for (let enrty of kvp) {
        let productName = enrty[0];
        let productQuantity = enrty[1];

        console.log(`${productName} -> ${productQuantity}`);
    }

}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);