function bomb(arr1, arr2) {
    let [bombNum, bombPower] = arr2;

    while (arr1.includes(bombNum)) {
        let bombIndex = arr1.indexOf(bombNum);
        arr1.splice(Math.max(0, bombIndex - bombPower), bombPower * 2 + 1, 0);
    }
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }

    console.log(sum);

}

bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bomb([1, 7, 7, 1, 2, 3], [7, 1]);
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);