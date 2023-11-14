function mu(array) {
    let health = 100;
    let rooms = array.split('|');
    let count = 0;
    let coins = 0;
    for (i = 0; i < rooms.length; i++) {
        count++;
        let room = rooms[i].split(' ');

        let object = room[0];
        let point = Number(room[1]);

        if (object == "potion") {
            if (health + point > 100) {
                point = 100 - health;
            }
            health += point;
            console.log(`You healed for ${point} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (object == "chest") {
            coins += point;
            console.log(`You found ${point} bitcoins.`);
        } else {
            health -= point;
            if (health <= 0) {
                console.log(`You died! Killed by ${object}.`);
                console.log(`Best room: ${count}`);
                return;
            } else {
                console.log(`You slayed ${object}.`);
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);

}

//mu("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
mu("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");