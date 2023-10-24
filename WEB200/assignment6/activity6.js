function multi() {
    let userNum = window.prompt("Pick 1 Number to multiply", 1);
    let i = 0;
    let out = 0;

    while (i >= 0 && i <= 3) {
        out = userNum * i;
        console.log(out);
        i++;
    }
}

function guess() {
    let userGuess = window.prompt("Pick a number between 0 and 100");
    let high = 100;
    let low = 0;

    // if user says 65
    // if not equal to high or low value
    // average of the (high + low)/2 = 50 if user Guess is higher or lower 
    // since user guess is higher than 50
    // we know that number between 50 and 100
    // 150/2 = 75.... 
    // now it's lower than 75... so 75 is the new "high"
    // is user Guess higher or lower than 75.. it's Lower (i.e. 65)
    // 75 + 50 = 125/2 = 63... 
    // is userGuess higher or lower than 63... it's higher
    // 63 is the new "low" and 75 is still the "high"

    // do while loop... that compares the user's guess to the average of high and low... 
    //failsafe if the user picked a number below 0 or above 100
    if (userGuess < 0 || userGuess > 100) {
        window.alert("PLEASE PICK A NUMBER BETWEEN 0 AND 100!!");
    }
    else {
        high = 100;
        // dowhile (userGuess != high || userGuess != low) {
            // if (userGuess < high) {
            //     low = (high + low) / 2;
            // } else if (userGuess > high) {
            //     high = (high + low) / 2;
            // } else if (userGuess == high || userGuess == low) {
            //     console.log("Is your number: " + userGuess);
            // }
        // }
        do {
            console.log("Give me one second while i guess your number");

        } while(userGuess != high || userGuess != low) {
            if (userGuess < high) {
                low = (high + low) / 2;
            } else if (userGuess > high) {
                high = (high + low) / 2;
            } else if (userGuess == high || userGuess == low) {
                console.log("Is your number: " + userGuess);
            }
        }
        
        
        // TEST 
        // let res = "";
        // let i = 0;
        // let x = 0;
        // do {

        //     i=i+1;
        //     res = res + 1;

        // } while (x>5) {
        //     console.log("HI");
        // }

     }
}
