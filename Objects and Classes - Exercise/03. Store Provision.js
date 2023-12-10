function store(array1, array2) {
    let product = {};

    for (let i = 0; i < array1.length; i += 2) {
        let productName = array1[i];
        let qty = Number(array1[i + 1]);

        product[productName] = qty;
    }

    for (let i = 0; i < array2.length; i += 2) {
        let productName = array2[i];
        let qty = Number(array2[i + 1]);

        if (productName in product) {
            product[productName] += qty;
        } else {
            product[productName] = qty;
        }
    }

    for (let [key, value] of Object.entries(product)) {
        console.log(`${key} -> ${value}`);
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']);