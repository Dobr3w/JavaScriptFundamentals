function piccolo(array) {
    let lot = {};

    for (let i = 0; i < array.length; i++) {
        let [direction, carNumber] = array[i].split(", ");

        if (direction === "IN") {
            lot[carNumber] = direction;

        } else if (direction === "OUT") {
            if (carNumber in lot) {
                delete lot[carNumber];
            }
        }

        if (Object.keys(lot).length === 0) {
            console.log("Parking Lot is Empty");
            return;
        }
    }

    let entries = Object.entries(lot).sort();

    for (let [carNum, dir] of entries) {
        console.log(carNum);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ]);