function words(array) {
    let dic = {};
    for (let currWord of array) {

        let sepWords = currWord.split(" | ");

        for (let word of sepWords) {
            let [key, values] = word.split(": ");
            if (!dic[key]) {
                dic[key] = []; // Initialize as an array to store multiple definitions
              }
              dic[key].push(values);

            if (currWord === "Test") {
                let entries = Object.keys(dic);
                console.log(entries);
            }
        }
    }

}

// words(["programmer: an animal, which turns coffee into code | developer: a magician", "fish | domino", "Hand Over"]);
words(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin", "care | kitchen | flower", "Test"]);