function addBook() {
    //an empty object
    const newBook = {};
    //grabs the values or inputs from the input fields and populates the object newBook
    newBook.title = document.getElementById("title").value;
    newBook.lName = document.getElementById("lastName").value;
    newBook.fName = document.getElementById("firstName").value;
    newBook.mName = document.getElementById("middleName").value;
    newBook.year = document.getElementById("year").value;
    newBook.publisher = document.getElementById("pub").value;
    newBook.city = document.getElementById("city").value;
    newBook.state = document.getElementById("state").value;
    console.log(newBook);

    //outputs as an apa format
    let apaFormat = newBook.lName + ", " + newBook.fName + ". " + newBook.mName + ". " + "(" + newBook.year + ") " + newBook.title + ". " + newBook.city + ", " + newBook.state + ": " + newBook.publisher + ".";
    document.getElementById("format").innerHTML = apaFormat;
}

function mlaMethod() {
    const newBook = {};
    newBook.title = document.getElementById("title").value;
    newBook.lName = document.getElementById("lastName").value;
    newBook.fName = document.getElementById("firstName").value;
    newBook.mName = document.getElementById("middleName").value;
    newBook.year = document.getElementById("year").value;
    newBook.publisher = document.getElementById("pub").value;
    newBook.city = document.getElementById("city").value;
    newBook.state = document.getElementById("state").value;
    console.log(newBook);

    //a method to automatically output into MLA format
    newBook.displayMLA = function () {
        //returns in MLA format
        return this.lName + ", " + this.fName + " " + this.mName + ". " + newBook.title + ". " + newBook.publisher + ", " + newBook.year + ". ";
    }
    let apaForm = newBook.lName + ", " + newBook.fName + ". " + newBook.mName + ". " + "(" + newBook.year + ") " + newBook.title + ". " + newBook.city + ", " + newBook.state + ": " + newBook.publisher + ".";
    document.getElementById("mla").innerHTML = newBook.displayMLA();
    document.getElementById("aAPA").innerHTML = apaForm;
}