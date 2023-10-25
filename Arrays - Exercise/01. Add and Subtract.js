function add(input) {

    let index = 0;
    let num = input[index];
    let sum1 = 0;
    let sum2 = 0;
    let newArray = [];
    while (index < input.length) {

        sum1 += num;

        if (num % 2 == 0) {
            newArray.push(num += index);
            //console.log(num += index);
        }
        else {
            newArray.push(num -= index);
            //console.log(num -= index);
        }

        sum2 += num;

        index++;
        num = input[index];
    }

    console.log(newArray);
    console.log(sum1);
    console.log(sum2);

}