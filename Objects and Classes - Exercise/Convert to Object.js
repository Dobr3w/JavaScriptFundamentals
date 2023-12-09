function convert(input) {

    let person = JSON.parse(input);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }

}


convert('{"name": "George", "age": 40, "town": "Sofia"}');