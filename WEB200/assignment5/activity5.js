function sockSize() {
    let sSize = window.prompt("What is your shoe size?", 1);

    //this is a failsafe for if someone decides to pick 0 as a shoe size.
    //If someone doesn't pick 0 then th code continues to check between the numbers for the right if statement.
    if (sSize == 0) {
        document.getElementById("size").innerHTML = "PLEASE CLICK AGAIN AND CHOOSE A REAL SHOE SIZE!"
    } else {

        if (sSize < 4) {
            document.getElementById("size").innerHTML = "your sock size is extra small!";
        } else if (sSize >= 4 && sSize <= 6) {
            document.getElementById("size").innerHTML = "your sock size is small!";
        } else if (sSize >= 7 && sSize <= 9) {
            document.getElementById("size").innerHTML = "your sock size is medium!";
        } else if (sSize >= 10 && sSize <= 12) {
            document.getElementById("size").innerHTML = "your sock size is large!";
        } else if (sSize >= 13) {
            document.getElementById("size").innerHTML = "your sock size is extra large!";
        }
    }

}



function shoeSize() {

    // function getSize() {
    //     let sSize = window.prompt("What is your shoe size?", 1);
    // }



    let sSize = window.prompt("What is your shoe size?", 1);

    switch (sSize) {
        case "1":
        case "2":
        case "3":
            document.getElementById("newSize").innerHTML = "Your shoe size is extra small";
            break;
        case "4":     
        case "5":
        case "6":
            document.getElementById("newSize").innerHTML = "Your shoe size is small";
            break;
        case "7":     
        case "8":
        case "9":
            document.getElementById("newSize").innerHTML = "Your shoe size is medium";
            break;
        case "10":     
        case "11":
        case "12":
            document.getElementById("newSize").innerHTML = "Your shoe size is large";
            break;
        default:
            document.getElementById("newSize").innerHTML = "Your shoe size is extra large";
            break;
    }
    
}