 function groupMulti() {
    let userNum = window.prompt("Pick 1 Number to multiply", 1);
    let out = 0;

    //loops until i is equal to 3 so it loops 4 times
    for (let i = 0; i <= 3 && i >= 0; i++) {
        //multiplies the number gotten from the user by the current iteration number (usernum * 1, usernum * 2, usernum * 3)
        out = userNum * i;
        console.log(out);
    }
 }

 function averageGrade () {
    gradeGet = window.prompt("How many scores would you like to enter?");
    let grade = 0;
    let gradeTotal = 0;
    let gradeAvg = 0;

    if (gradeGet <= 0) {
        window.alert("PLEASE PICK A NUMBER BIGGER THAN 0!")
    } else {
        //loops through the code until I is equal to gradeGet (controls the iterations of the loop)
        for (let i = 0; i < gradeGet; i++) {
            //gets the scores from the user and stores it in grade (overwrites each time the loop runs but gets added to total before being overwritten)
            grade = parseInt(prompt("Please input a score"));
            //adds grade to grade total each time the user puts in a score
            gradeTotal += grade;
        }
        gradeAvg = gradeTotal / gradeGet;
        console.log(gradeAvg);
        document.getElementById("aGrade").innerHTML = "Your average grade is: " + gradeAvg;
    }
 }