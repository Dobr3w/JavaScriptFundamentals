function charInRange(char1, char2) {

    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);
    let startCode = 0;
    let endCode = 0;
    let result = '';

    if (code1 < code2) {
        startCode = code1;
        endCode = code2;
    }

    else {
        startCode = code2;
        endCode = code1;
    }

    for (let i = startCode + 1; i < endCode; i++) {
        let currChar = String.fromCharCode(i);
        result += currChar + ' ';
    }

    console.log(result);
}
charInRange('a', 'd');
charInRange('#',':');
charInRange('C', '#');