function dark(arr) {
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split('|');

    let health = 100;
    let coins = 0;
let roomCount = 0;

    for (let room of rooms) {
        roomCount++;

        let splitedObj = room.split(' ');

        let object = splitedObj[0];
        let values = Number(splitedObj[1]);

        if (object == 'potion') {
            if (health + values >= 100) {
                values = 100 - health;
            }
            health+=values;

            console.log(`You healed for ${values} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (object == 'chest') {
            coins += values;
            console.log(`You found ${values} coins.`);
        } else {
            health -= values;
            if (health > 0) {
                console.log(`You slayed ${object}.`);
            } else {
                console.log(`You died! Killed by ${object}.`);
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);