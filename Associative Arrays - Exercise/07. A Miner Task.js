function miner(array) {
    let resources = {};

    for (let i = 0; i < array.length; i += 2) {

        let resource = array[i];
        let qty = Number(array[i+1]);

        if (resource in resources) {
            resources[resource] += qty;
        } else {
            resources[resource] = qty;
        }
    }

    let entries = Object.entries(resources);

    for (let [resourceName, resourceQty] of entries) {
        console.log(`${resourceName} -> ${resourceQty}`);
    }
}

miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

miner(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);