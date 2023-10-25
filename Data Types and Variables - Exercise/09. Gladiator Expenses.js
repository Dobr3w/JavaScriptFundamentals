function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let lostFightsCount = 1;

    let helmetBrokeCount = 0;
    let swordBrokeCount = 0;
    let shieldBrokeCount = 0;
    let armorBrokeCount = 0;
    let expenses = 0;

    while (lostFightsCount <= lostFights) {
        if (lostFightsCount % 2 == 0) { //Every second lost game, his helmet is broken.
            helmetBrokeCount++;
        }
        if (lostFightsCount % 3 == 0) { //Every third lost game, his sword is broken.
            swordBrokeCount++;
        }

        if (lostFightsCount % 6 == 0) { //When both his sword and helmet are broken in the same lost fight, his shield also breaks.
            shieldBrokeCount++;
        }

        if (lostFightsCount % 12 == 0) { //Every second time, when his shield brakes, his armor also needs to be repaired.
            armorBrokeCount++;
        }

        lostFightsCount++;
    }
    expenses = helmetBrokeCount * helmetPrice + swordBrokeCount * swordPrice + shieldBrokeCount * shieldPrice + armorBrokeCount * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}