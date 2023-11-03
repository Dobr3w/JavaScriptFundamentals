function matrix(num) {

    for (let i = 1; i <= num; i++) {
        let result = (num.toString() + ' ').repeat(num);
        console.log(result);
    }
}

matrix(7);
matrix(3);