function magicSum(arr, resultNum) {
    let sum = 0;
 
    for (let i = 0; i < arr.length - 1; i++) {
        let currNum = arr[i];
 
        for (let j = i + 1; j < arr.length; j++) {
            let currNum2 = arr[j];
 
            sum = currNum + currNum2;
 
            if (sum === resultNum) {
                console.log(currNum + ' ' + currNum2 + ' ');
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],27);