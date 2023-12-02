function rep(str) {
    let noRepStr = '';
    let prevChar = '';

    for (let char of str) {
        if (char !== prevChar) {
            noRepStr += (char);
            prevChar = char;
        }
    }

    console.log(noRepStr);
}

rep('aaaaabbbbbcdddeeeedssaa');
rep('qqqwerqwecccwd');
