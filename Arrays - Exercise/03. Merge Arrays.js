function mergeArr(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {

        let el1 = arr1[i];
        let el2 = arr2[i];


        if (i % 2 == 0) {
            let sum = Number(el1) + Number(el2);
            newArr.push(sum);
        } else {
            let conc = el1 + el2;
            newArr.push(conc);
        }
    }

    console.log(newArr.join(' - '));
}