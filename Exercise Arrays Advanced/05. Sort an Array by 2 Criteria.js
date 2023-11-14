function sortBy(array) {
 let sortedArray = array.sort((a,b) => a.length - b.length || a.localeCompare(b));
console.log(sortedArray.join('\n'));
}

sortBy(['alpha','beta','gamma']);
sortBy(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);