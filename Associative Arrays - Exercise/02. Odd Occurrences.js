function occurrences(array) {

    let occurrence = {};

    let splitedArray = array.toLowerCase().split(' ');

    for (let word of splitedArray) {
        if (word in occurrence) {
            occurrence[word] += 1;
        } else {
            occurrence[word] = 1;
        }
    }

    let entries = Object.entries(occurrence).sort((a, b) => b[1] - a[1]);
    let odd = [];
    for (let [key, value] of entries) {
        if (value % 2 != 0) {
            odd.push(key);
        }
    }
    console.log(odd.join(' '));
}

occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
occurrences('Cake IS SWEET is Soft CAKE sweet Food');
occurrences('Cake IS SWEET is Soft CAKE sweet Food')