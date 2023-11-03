function palindromeInt(arr) {
    for (let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }
    function checkIsPalindrome(num) {
        let numAsString = String(num);
        let reversedNumString = '';

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let currChar = numAsString[i];
            reversedNumString += currChar;
        }

        let isPalindrome = numAsString == reversedNumString;
        return isPalindrome;
    }
}

//palindromeInt([123, 323, 421, 121]);
palindromeInt([32, 2, 232, 1010]);