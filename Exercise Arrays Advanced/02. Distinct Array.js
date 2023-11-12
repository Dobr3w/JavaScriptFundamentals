function distinct(arr) {
    let newArr = [];

    for (let num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(' '));
}

distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([20, 8, 12, 13, 4, 4, 8, 5]);