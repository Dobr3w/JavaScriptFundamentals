function login(input) {
    let username = input[0];
    let pass = '';
    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }

    let guess = input[1];
    let index = 2;
    let wrongPass = 0;
    while (guess != pass) {
        wrongPass++;

        if (wrongPass >= 4) {
            break;
        }

        console.log("Incorrect password. Try again.");
        guess = input[index];
        index++;
    }

    if (wrongPass >= 4) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}