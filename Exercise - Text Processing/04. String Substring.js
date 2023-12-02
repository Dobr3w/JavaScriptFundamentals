function stringSub(word, text) {
    text = text.toLowerCase().split(' ');

    if (text.includes(word)) {
        console.log(`${word}`);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSub('javascript', 'JavaScript is the best programming language');
stringSub('python', 'JavaScript is the best programming language');