function town(arr) {
    //{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
    //{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }

    for (let curr of arr) {
        let [name, x, y] = curr.split(" | ");

        let obj = {
            town: name,
            latitude: Number(x).toFixed(2),
            longitude: Number(y).toFixed(2),
        }

        console.log(obj);
    }

}


town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);