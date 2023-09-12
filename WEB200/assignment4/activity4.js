function age() {

    let years = document.getElementById("age").value

    //converts the string gotten from the textbox and makes it an integer
    years = parseInt(years);

    //calculates how old you are in months by multiplying how old you are by how many months are in a year 
    let month = years * 12;
    let day = years * 365;
    let hour = years * 8760;
    let seconds = years * 31536000;
    
    document.getElementById("months").innerHTML = "Your age is: " + month + " in months!";
    document.getElementById("days").innerHTML = "Your age is: " + day + " in days!";
    document.getElementById("hours").innerHTML = "Your age is: " + hour + " in hours!";
    document.getElementById("seconds").innerHTML = "Your age is: " + seconds + " in hours!";
}

function grossPay() {

        let hours = window.prompt("How many hours do you work a week?", 1);
        let rate = window.prompt("How much do you make hourly?", 1)    
        //calculates the weekly gross pay
        let week = hours * rate;
        //calculates the monthly gross pay
        let monthly = week * 4;
        //calculates the weekly gross pay
        let annual = week * 52;
    
        //displays to the website by grabbing a paragraph tag with the id.
        document.getElementById("weekly").innerHTML = "Your weekly gross pay is: " + week;
        document.getElementById("monthly").innerHTML = "Your monthly gross pay is: " + monthly;
        document.getElementById("annually").innerHTML = "Your annual gross pay is: " + annual;
}
