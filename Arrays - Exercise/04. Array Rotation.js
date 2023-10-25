function rotation(arr, count) {
    for (let rotationCount = 1; rotationCount <= count; rotationCount++) {
        let firstEl = arr.shift();
        arr.push(firstEl);

        
    }

    console.log(arr.join(' '));
}