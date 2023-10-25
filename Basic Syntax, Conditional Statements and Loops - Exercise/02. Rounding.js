function round(num, precision) {
    let pre = precision;
    if (pre >= 15) {
        pre = 15;
    }

    let roundedNum = num.toFixed(pre);
    console.log(parseFloat(roundedNum));
}