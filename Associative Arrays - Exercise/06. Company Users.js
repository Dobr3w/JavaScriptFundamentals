function users(array) {

    let company = {};

    for (let tokens of array) {
        let [companyName, userId] = tokens.split(' -> ');

        if (companyName in company) {
            if (!company[companyName].includes(userId)) {
                company[companyName].push(userId);
            }
        } else {
            company[companyName] = [userId];
        }
    }

    let entries = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, users] of entries) {
        console.log(name);
        users.forEach(element => console.log(`-- ${element}`));
    }
}


users(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
//users([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);