function PascalCase(str) {
    let words = str.split(/(?=[A-Z])/);
    let result = words.join(', ');
    console.log(result);
}

PascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
PascalCase('HoldTheDoor');
PascalCase('ThisIsSoAnnoyingToDo');