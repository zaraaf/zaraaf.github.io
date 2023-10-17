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

    //failsafe if the user picked a number below 0 or above 100
    if (userGuess < 0 || userGuess > 100) {
        window.alert("PLEASE PICK A NUMBER BETWEEN 0 AND 100!!");
    }
    else {
        dowhile ()
    }
}