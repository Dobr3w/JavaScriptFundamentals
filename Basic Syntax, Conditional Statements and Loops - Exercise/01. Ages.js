function ages(age) {
    let ageNum = age;
    let result = '';

    if (ageNum >= 0 && ageNum <= 2) {
        result = 'baby';
    } else if (ageNum >= 3 && ageNum <= 13) {
        result = 'child';
    } else if (ageNum >= 14 && ageNum <= 19) {
        result = 'teenager';
    } else if (ageNum >= 20 && ageNum <= 65) {
        result = 'adult';
    } else if (ageNum >= 66) {
        result = 'elder';
    } else {
        result = 'out of bounds';
    }

    console.log(result);
}

ages(14);
ages(5);
ages(68);