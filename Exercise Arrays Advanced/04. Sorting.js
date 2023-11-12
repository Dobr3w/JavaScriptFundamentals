function sort(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];

    while (sortedArr.length >0) {
        let max = sortedArr.pop();
        let min = sortedArr.shift();
        newArr.push(max);
        newArr.push(min);
    }

    console.log(newArr.join(' '));
}


sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sort([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);