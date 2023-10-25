function spice(yield) {
    let startingYields = Number(yield);
    let totalYields = 0;
    let currYields = 0;
    let days = 0;

    while (startingYields >= 100) {

        currYields = startingYields - 26;
        totalYields += currYields;
        days++;
        startingYields -= 10;
    }
    if (totalYields <= 26) {
        totalYields = 0;
    } else {
        totalYields -= 26;
    }
    console.log(days);
    console.log(totalYields);
}