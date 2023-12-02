function race(arr) {
    let names = arr.shift().split(', ');
    let command = arr.shift();

    let result = {};

    let letterPattern = /[a-z]/gi;
    let digitsPattern = /\d/g;

    names.forEach(name => result[name] = 0);

    while (command !== 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('');

        let digitsMatches = command.match(digitsPattern);
        let dist = digitsMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in result) {
            result[name] += dist;
        }

        command = arr.shift();
    }

    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResult[0][0]}`)
    console.log(`2nd place: ${sortedResult[1][0]}`)
    console.log(`3rd place: ${sortedResult[2][0]}`)
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);


// race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race']);