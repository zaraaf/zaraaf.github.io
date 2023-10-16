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