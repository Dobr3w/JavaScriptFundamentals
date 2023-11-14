function pig(input) {

    let food = Number(input[0] * 1000);
    let hay = Number(input[1] * 1000);
    let cover = Number(input[2] * 1000);
    let weight = Number(input[3] * 1000);
    let coverConsum = weight / 3;

    for (let days = 1; days <= 30; days++) {

        food -= 300;

        if (days % 2 == 0) {
            hay -= food * 0.05;
        }

        if (days % 3 == 0) {
            cover -= coverConsum.toFixed(2);
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
}

pig([9,5,5.2,1]);