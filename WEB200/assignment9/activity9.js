function getDate() {
   const date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDay();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let i = 0;

   // const daysOWeek = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
   
   document.getElementById("date").innerHTML = "Full date: " + date;
   document.getElementById("year").innerHTML = "Year: " + year;
   document.getElementById("month").innerHTML = "Months: " + month;
   document.getElementById("days").innerHTML = "Days: " + day;
   document.getElementById("hours").innerHTML = "Hours: " + hours;
   document.getElementById("minutes").innerHTML = "Minutes: " + minutes;
   document.getElementById("seconds").innerHTML = "Seconds " + seconds;
   
   // year = date.getFullYear;
   // month = date.getMonth;
   // day = date.getDay;
   // hours = date.getHours;
   // minutes = date.getMinutes;
   // seconds = date.getSeconds;
   setInterval(getDate, 1000);

}

function datePick() {
   //gets the date selected from the form field
   const selectedDate = new Date(document.getElementById("datePicked").value);
   //outputs the year (UTC), month, and day.
   document.getElementById("years2").value = selectedDate.getUTCFullYear();
   document.getElementById("months2").value = selectedDate.getMonth();
   document.getElementById("days2").value = selectedDate.getDay();
}