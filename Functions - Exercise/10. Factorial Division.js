function factorial(num1, num2) {

    let number1 = factorialNumber(num1);
    let number2 = factorialNumber(num2);
    let result = number1 / number2;

    console.log(`${result.toFixed(2)}`);

    function factorialNumber(num) {
        let result = 1;

        while (num > 1) {
            result *= num;
            num--;
        }

        return result;
    }
}

factorial(5, 5);
factorial(6, 2);