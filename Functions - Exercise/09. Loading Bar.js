function loadingBar(num) {
    let percent = `%`;
    let dot = '.';
    if (num != 100) {
        let num1 = num / 10;
        let num2 = 10 - num1;
        console.log(`${num}% [${percent.repeat(num1)}${dot.repeat(num2)}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`${num}% Complete!`);
        console.log(`[${percent.repeat(10)}]`);
    }
}

//loadingBar(0);
//loadingBar(30);
//loadingBar(50);
loadingBar(100);