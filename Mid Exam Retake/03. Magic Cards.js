function cards(input) {
    let originalDeck = input.shift().split(':');
    let newDeck = [];

    for (let command of input) {
        if (command === 'Ready') {
            break;
        }

        let [action, ...params] = command.split(' ');
        let cardName = params[0];

        if (action === 'Add') {
            if (originalDeck.includes(cardName)) {
                newDeck.push(cardName);
            } else {
                console.log('Card not found.');
            }
        } else if (action === 'Insert') {
            let index = Number(params[1]);
            if (originalDeck.includes(cardName) && index >= 0 && index <= newDeck.length) {
                newDeck.splice(index, 0, cardName);
            } else {
                console.log('Error!');
            }
        } else if (action === 'Remove') {
            let indexToRemove = newDeck.indexOf(cardName);
            if (indexToRemove !== -1) {
                newDeck.splice(indexToRemove, 1);
            } else {
                console.log('Card not found.');
            }
        } else if (action === 'Swap') {
            let cardName2 = params[1];
            let index1 = newDeck.indexOf(cardName);
            let index2 = newDeck.indexOf(cardName2);
            if (index1 !== -1 && index2 !== -1) {
                [newDeck[index1], newDeck[index2]] = [newDeck[index2], newDeck[index1]];
            }
        } else if (action === 'Shuffle') {
            newDeck.reverse();
        }
    }

    console.log(newDeck.join(' '));
}

cards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Bite",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Ready"]);

cards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
"Add UndergroundSea",
"Add Timetwister",
"Remove Wrath",
"Add CopyArtifact",
"Shuffle deck",
"Ready"]);

cards(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
"Add BlackLotus",
"Insert Claw 1",
"Add Moonfire",
"Add Bite",
"Ready"]);
