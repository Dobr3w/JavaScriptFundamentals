function city(town) {

    for (let key in town) {
        console.log(key, '->' , town[key]);
    }

}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});