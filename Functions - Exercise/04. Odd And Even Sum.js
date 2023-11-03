function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    let numberAsString = number.toString();
    // let numberAsString = String(numer);

    for (let char of numberAsString) {
        let charAsNum = Number(char);
        if (charAsNum % 2 == 0) {
            evenSum += charAsNum;
        } else {
            oddSum += charAsNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);