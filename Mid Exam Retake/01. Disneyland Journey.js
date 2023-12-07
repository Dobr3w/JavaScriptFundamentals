function disney(arr) {

    let moneyNeeded = Number(arr[0]);
    let months = Number(arr[1]);
    let savedMoney = 0;

    for (let cuurMonth = 1; cuurMonth <= months; cuurMonth++) {

        if (cuurMonth % 2 != 0 && cuurMonth > 1) {
            savedMoney = savedMoney - savedMoney * 0.16;
        }

        if (cuurMonth % 4 == 0) {
            savedMoney += savedMoney * 0.25;
        }

        savedMoney += moneyNeeded * 0.25;
    }

    if (savedMoney >= moneyNeeded) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - moneyNeeded).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(moneyNeeded - savedMoney).toFixed(2)}lv. more.`);
    }

}

disney(["1000", "4"]);
disney(["3265", "3"]);
