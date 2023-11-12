function train(arr) {
    let wagons = arr[0].split(' ').map(Number);
    let capacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let splitedCommand = command.split(' ');
        if (splitedCommand[0] == "Add") {
            let wagonCapacity = Number(splitedCommand[1]);
            wagons.push(wagonCapacity);
        } else {
            let wagonCapacity = Number(splitedCommand[0]);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + wagonCapacity <= capacity) {
                    wagons[index] += wagonCapacity;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])