function emp(arr) {
    for (let empName of arr) {
        let employee = {
            name: empName,
            personalNum: empName.length
        };

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}



emp(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);
emp(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland']);