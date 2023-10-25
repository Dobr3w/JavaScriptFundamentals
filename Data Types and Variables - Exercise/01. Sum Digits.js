function sum(num) {
    let numAsString = num.toString();
    let sum = 0;
    for (let i = 0 ; i < numAsString.length; i++) {
        //console.log(numAsString[i]);
        sum += parseInt(numAsString[i]);
    }
    console.log(sum);
}