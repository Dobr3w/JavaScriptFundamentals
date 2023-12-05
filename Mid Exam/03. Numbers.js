function num(array) {
    let nums = array.split(" ").map(Number);
    let total = 0;
    let avg = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        avg = total / nums.length;
    }
    let greaterNum = [];

    for(let currNum of nums) {
        if(currNum > avg) {
            greaterNum.push(currNum);
        }
    }

    if(nums.length == 1) {
        console.log(`No`);
        return;
    }

    console.log(greaterNum.sort((a,b) => b-a).slice(0,5).join(" "));
}


num('10 20 30 40 50');
num('5 2 3 4 -10 30 40 50 20 50 60 60 51');
num('1');
num('-1 -2 -3 -4 -5 -6');