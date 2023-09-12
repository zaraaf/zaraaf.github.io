//making the function grossPay, it looks for 2 arugments named hours and rate in that order.
function grossPay(hours, rate) {

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

//calls grossPay function and inputs hours and rate depending on what the user types.
grossPay(window.prompt("How many hours do you work a week?", 1), window.prompt("How much do you make hourly?", 1)); 

//looks for 2 arguments radius and lSide
function areaShapes (radius, lSide) {

    //sets the radius equal to radius
    let r = radius;
    //sets the length of the side equal to lSide
    let a  = lSide;

    //variables to eventually hold the output of calculations for both the area of a circle and square
    let carea = 0;
    let sarea = 0;
    
    //area of circle using Math objects (gets PI and multiplies it by r to the second power)
    carea = Math.PI * Math.pow(r,2);

    //area of a square (multiplies a to the second power)
    sarea = Math.pow(a,2);

    //outputs the area of both the circle and the square and makes it to only 2 decimal places
    document.getElementById("circle").innerHTML = "The area of your circle is: " + carea.toFixed(2);
    document.getElementById("square").innerHTML = "The are of your square is: " + sarea.toFixed(2);

    // console.log(carea.toFixed(2));
    // console.log(sarea.toFixed(2));
}

//gets the radius of the circle and the length of the side of the  square
areaShapes(window.prompt("What is the radius of your circle?", 1), window.prompt("What is the length of the side of your square?", 1));