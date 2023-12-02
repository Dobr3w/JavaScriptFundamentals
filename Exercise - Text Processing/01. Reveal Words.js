function words(wordStr, text) {
    let words = wordStr.split(', ');

    for (let word of words) {
        let repeatCount = word.length;

        let star = '*'.repeat(repeatCount);
        text = text.replace(star, word);
    }

    console.log(text);
}

words('great', 'softuni is ***** place for learning new programming languages');
words('great, learning', 'softuni is ***** place for ******** new programming languages');