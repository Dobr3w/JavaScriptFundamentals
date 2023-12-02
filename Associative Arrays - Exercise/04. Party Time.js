function partyTime(array) {
    let guestList = [];
    let partyGuests = [];

    let partyIndex = array.indexOf('PARTY');
    if (partyIndex !== -1) {
        let leftSide = array.splice(0, partyIndex);
        guestList.push(...leftSide);

        let rightSide = array.splice(1);
        partyGuests.push(...rightSide);
    }

    let guestNoCome = [];
    for (let guest of guestList) {

        if (!partyGuests.includes(guest)) {
            guestNoCome.push(guest);
        }
    }

    console.log(guestNoCome.length);
    console.log(guestNoCome.sort().join('\n'));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);

// partyTime(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ']);