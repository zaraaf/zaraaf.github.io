var hours = window.prompt("How many hours do you work a week?");
var rate = window.prompt("How much do you make hourly?");

//calculates the pay based on what the user input in the window
let week = hours * rate;
//multiplies week by 4 so that it calculates a month (4 weeks) of pay
let monthly = week * 4;
//multiplies week by 52 to find the yearly pay. there are 52 weeks in year
let annual = week * 52;

// -----these are to calculate how old you are in different times.------
var age = window.prompt("How old are you in years (round to the nearest year)?");

//calculates how old you are in months by multiplying how old you are by how many months are in a year 
let month = age * 12;
//calculates how old you are in days by multiplying how old you are by how many days are in a year
let day = age * 365;
//calculates how old you are in hours by multiplying how old you are by how many hours in a year
let hour = age * 8760;
//calculates how old you are in seconds by multiplying your age by how many seconds are in a single year
let seconds = age * 31536000;


// -----these are to calculate and convert lengths.-----
var miles = window.prompt("How many miles would you like to convert?");

let yard = miles * 1760;
let feet =  miles * 5280;
let inch = miles * 63360;
let km = miles * 1.60934;
let meters = miles * 1609.34;
let cm = miles * 160934;

// -----these are to caclulate are of shapes-----
let h = 10;
let w = 15;
let b = 5;
let a = 20;
//have to use different area variables so that they arent all the same when the program is run. itll only take the last one and make that the output.
let tarea = 0;
let rarea = 0;
let sarea = 0;

//calculation for area of triangle
tarea = 0.5 * b * h;
//calculation for area of rectangle
rarea = w * h;
//calculation for area of square
sarea = a * a;

// ----- these are to calculate the area of a room -----
var width = window.prompt("What is the length of your room in feet?");
var length = window.prompt("What is the length of your room in feet?");

let area = length * width;
const squareYards = 3;
let squareArea = area / (squareYards * squareYards);

// ----- these are to demonstrate the order of operations -----
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

let order1 = num1 + num2 * num3;
let order2 = (num1 + num2) * num3;
let order3 = num1 + num2 * num3 / num4;
let order4 = num1 + num2 / (num3 * num4);
let order5 = num1 - num2 * (num3 / num4);
let order6 = num1 + num2 * (num3 ** num4);

//this is for gross pay
console.log("Your weekly gross pay is: " + week);
console.log("Your monthly gross pay is: " + monthly);
console.log("Your annual gross pay is: " + annual);

//this is to display the calculated month, day, hours, and seconds of someones age.
document.getElementById("months").innerHTML = "You are aproximately " + month + " months old!";
document.getElementById("days").innerHTML = "You are aproximately " + day + " days old!";
document.getElementById("hours").innerHTML = "You are aproximately " + hour + " hours old!";
document.getElementById("seconds").innerHTML = "You are aproximately " + seconds + " seconds old!";

//this is to display the lengths
document.getElementById("yards").innerHTML = miles + " miles " + " is aproximately " + yard + " in yards!"
document.getElementById("feet").innerHTML = miles + " miles " + " is aproximately " + feet + " in feet!"
document.getElementById("inches").innerHTML = miles + " miles " + " is aproximately " + inch + " in inches!"
document.getElementById("kilometers").innerHTML = miles + " miles " + " is aproximately " + km + " in kilometers!"
document.getElementById("meters").innerHTML = miles + " miles " + " is aproximately " + meters + " in meters!"
document.getElementById("centimeters").innerHTML = miles + " miles " + " is aproximately " + cm + " in centimeters!"

//This is to display area of different shapes
document.getElementById("triangle").innerHTML = "the area of the triangle when the base = 5 and vertical heigh = 10 is: " + tarea;
document.getElementById("rectangle").innerHTML = "the area of the rectangle when the width = 15 and height = 10 is: " + rarea;
document.getElementById("square").innerHTML = "the area of the square when the length of side = 20 is: " + sarea;

//This is to display the area of a room in square yards
document.getElementById("aRoom").innerHTML = "The area of your room in square yards is: " + squareArea + " square feet";

//this is to display pemdas
document.getElementById("o1").innerHTML = "the equation is: 1 + 2 * 3 = " + order1;
document.getElementById("o2").innerHTML = "the equation is: (1 + 2) * 3 = " + order2;
document.getElementById("o3").innerHTML = "the equation is: 1 + 2 * 3 / 4 = " + order3;
document.getElementById("o4").innerHTML = "the equation is: 1 + 2 / (3 * 4) = " + order4;
document.getElementById("o5").innerHTML = "the equation is: 1 - 2 * (3 / 4) = " + order5;
document.getElementById("o6").innerHTML = "the equation is: 1 + 2 * (3**4) = " + order6;