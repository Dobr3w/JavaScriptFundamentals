function chat(input) {
    let message = input.shift();

    while (input[0] != 'Reveal') {
        let line = input.shift();
        let tokens = line.split(':|:');

        let command = tokens[0];

        switch (command) {
            case 'InsertSpace':
                let index = Number(tokens[1]);
                let firstHalf = message.slice(0, index);
                let secondHalf = message.slice(index);
                message = firstHalf + ' ' + secondHalf;
                break;
            case 'Reverse':
                let substring = tokens[1];
                let inx = message.indexOf(substring);

                if (inx == -1) {
                    console.log('error');
                    continue;
                }

                let left = message.slice(0, inx);
                let right = message.slice(inx + substring.length);

                message = left + right + substring.split('').reverse().join('');
                break;
            case 'ChangeAll':
                let match = tokens[1];
                let replace = tokens[2];

                let parts = message.split(match);
                message = parts.join(replace);

                break;
        }

        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}

// chat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

chat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);