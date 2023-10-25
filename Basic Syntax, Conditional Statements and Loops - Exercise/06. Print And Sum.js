function print(startNum, endNum) {
    let sum = 0;
    let array = [];
    let currNum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        array.push(i);
    }
    console.log(array.join(' '));
    console.log(`Sum: ${sum}`);
}