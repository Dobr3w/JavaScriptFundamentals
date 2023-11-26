function inventory(array) {
    let heroes = [];

    for (let hero of array) {

        let heroDetails = hero.split(' / ');
        //console.log(heroDetails);

        let [heroName, heroLevel, heroItems] = heroDetails;
        let heroRegister = { name: heroName, level: Number(heroLevel), items: heroItems };
        heroes.push(heroRegister);

    }

    for (let i = 0; i < heroes.length; i++) {
        heroes.sort((min, max) => min.level - max.level);

        console.log(`Hero: ${heroes[i].name}`);
        console.log(`level => ${heroes[i].level}`);
        console.log(`items => ${heroes[i].items}`);
    }
}

// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);