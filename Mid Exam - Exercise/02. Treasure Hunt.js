function hunt(arr) {
    let loot = arr.shift().split("|");
    let command = arr.shift();

    while (command != "Yohoho!") {
        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == "Loot") {
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));

        } else if (action == "Drop") {
            let inx = tokens.shift();

            if (inx >= 0 && inx < loot.length) {
                let del = loot.splice(inx, 1).shift();
                loot.push(del);
            }
        } else if (action == "Steal") {
            let count = Number(tokens.shift());
            let removedItems = loot.splice(-count);
            console.log(removedItems.join(", "));
        }
        command = arr.shift();
    }

    if (loot.length <= 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let total = 0;

        for (let item of loot) {
            total += item.length;
        }

        let avg = total / loot.length;

        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
}

// hunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]);

hunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);