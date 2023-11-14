function search(array1, array2) {
    let [elToTake, elToDelete, searchedNum] = array2;

    let newArray = [];
    let count = 0;
    for (let i = 0; i < elToTake; i++) {
        newArray.push(array1[i]);
    }
    newArray.splice(0, elToDelete);

    for (let num of newArray) {
        if (num == searchedNum) {
            count++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${count} times.`);

}

search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);