function employees(arr) {
    for (let employeeName of arr) {
        //Name: Silas Butler -- Personal Number: 12
        let employees = {
            name: employeeName,
            num: employeeName.length,
        }

        console.log(`Name: ${employees.name} -- Personal Number: ${employees.num}`);
    }
}


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);