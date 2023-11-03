function addAndSubtract(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    let midResult = sum(num1, num2);
    let result = subtract(midResult, num3);

    console.log(result);
}

addAndSubtract(23, 6, 10);