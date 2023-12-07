function decipherSpell(commands) {

    let decipheredSpell = array[0];

    for (let i = 0; i < commands.length; i++) {
        let commandParts = commands[i].split(' ');

        switch (commandParts[0]) {
            case 'Abjuration':
                decipheredSpell = decipheredSpell.toUpperCase();
                console.log(decipheredSpell);
                break;
            case 'Necromancy':
                decipheredSpell = decipheredSpell.toLowerCase();
                console.log(decipheredSpell);
                break;
            case 'Illusion':
                const index = parseInt(commandParts[1]);
                const letter = commandParts[2];
                if (index >= 0 && index < decipheredSpell.length) {
                    decipheredSpell = decipheredSpell.substring(0, index) + letter + decipheredSpell.substring(index + 1);
                    console.log('Done!');
                } else {
                    console.log('The spell was too weak.');
                }
                break;
            case 'Division':
                const firstSubstring = commandParts[1];
                const secondSubstring = commandParts[2];
                decipheredSpell = decipheredSpell.split(firstSubstring).join(secondSubstring);
                console.log(decipheredSpell);
                break;
            case 'Alteration':
                const substring = commandParts[1];
                if (decipheredSpell.includes(substring)) {
                    decipheredSpell = decipheredSpell.replace(substring, '');
                    console.log(decipheredSpell);
                }
                break;
            default:
                console.log('The spell did not work!');
                break;
        }

        if (commandParts[0] === 'Abracadabra') {
            break;
        }
    }
}

decipherSpell(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]);

