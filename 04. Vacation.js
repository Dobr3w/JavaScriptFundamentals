function vacation(num, peoples, day) {
    let price = 0;
    let result = 0;
    switch (peoples) {
        case "Students":
            if (day == "Friday") {
                price = 8.45;
            } else if (day == "Saturday") {
                price = 9.80;
            } else if (day == "Sunday") {
                price = 10.46;
            }

            if (num >= 30) {
                result = (num * price) * 0.85;
            } else {
                result = num * price;
            }

            console.log(`Total price: ${result.toFixed(2)}`);
            break;

        case "Business":
            if (day == "Friday") {
                price = 10.90;
            } else if (day == "Saturday") {
                price = 15.60;
            } else if (day == "Sunday") {
                price = 16;
            }

            if (num >= 100) {
                result = (num - 10) * price;
            } else {
                result = num * price;
            }

            console.log(`Total price: ${result.toFixed(2)}`);
            break;

        case "Regular":
            if (day == "Friday") {
                price = 15;
            } else if (day == "Saturday") {
                price = 20;
            } else if (day == "Sunday") {
                price = 22.50;
            }

            if (num >= 10 && num <= 20) {
                result = (num * price) * 0.95;
            } else {
                result = num * price;
            }

            console.log(`Total price: ${result.toFixed(2)}`);
            break;
    }
}