function store(arr) {

    let totalPrice = 0;
    let tax = 0;

    for (let i = 0; i < arr.length; i++) {

        let curr = Number(arr[i]);
        if (curr >= 0) {
            totalPrice += curr;
            tax += curr * 0.20;
        } else if (curr < 0) {
            console.log(`Invalid price!`);
        }

        if (arr[i] === "regular") {
            if (totalPrice == 0) {
                console.log(`Invalid order!`);
            } else {
                console.log(`Congratulations you've just bought a new computer!`);
                console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
                console.log(`Taxes: ${tax.toFixed(2)}$`);
                console.log(`-----------`);
                console.log(`Total price: ${(totalPrice + tax).toFixed(2)}$`);
            }

        } else if (arr[i] === "special") {
            if (totalPrice == 0) {
                console.log(`Invalid order!`);
            } else {
                console.log(`Congratulations you've just bought a new computer!`);
                console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
                console.log(`Taxes: ${tax.toFixed(2)}$`);
                console.log(`-----------`);
                console.log(`Total price: ${((totalPrice + tax) * 0.90).toFixed(2)}$`);
            }
        }
    }
}


store([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);

store([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
]);

store([
    'regular'
]);