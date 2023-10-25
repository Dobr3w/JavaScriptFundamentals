function maxNum(array) {

    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let rightNum = array[j];
            if (rightNum >= currNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            newArr.push(currNum);
        }
    }

    console.log(newArr.join(' '));
}