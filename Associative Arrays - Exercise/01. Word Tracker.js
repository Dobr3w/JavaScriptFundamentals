function tracker(array) {

    let searchedWords = array.shift().split(" ");
    let occurrences = {};

    for (let word of searchedWords) {
        occurrences[word] = 0;
    }

    for (let currWord of array) {
        if (currWord in occurrences) {
            occurrences[currWord]++;
        }
    }

    let entries = Object.entries(occurrences).sort((min,max) => max[1]-min[1]);

    for (let [word, count] of entries) {
        console.log(`${word} - ${count}`);
    }

}

tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

tracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);