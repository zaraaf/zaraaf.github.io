function addUser() {
    // const userInfo = {};
    // userInfo.fName = document.getElementById("fName").value;
    // userInfo.lName = document.getElementById("lName").value;
    // userInfo.address = document.getElementById("add").value;
    // userInfo.city = document.getElementById("cit").value;
    // userInfo.region = document.getElementById("reg").value;
    // userInfo.postalCode = document.getElementById("postalCode").value;
    // userInfo.email = document.getElementById("e-mail").value;
    // userInfo.phoneNumber = document.getElementById("phoneNumber").value;
    // userInfo.dob = document.getElementById("dateOfBirth").value;
    // console.log(userInfo);

    const submitXHR = new XMLHttpRequest();
    submitXHR.onload = function () {
        const userInfo = {};
        userInfo.fName = document.getElementById("fName").value;
        userInfo.lName = document.getElementById("lName").value;
        userInfo.address = document.getElementById("add").value;
        userInfo.city = document.getElementById("cit").value;
        userInfo.region = document.getElementById("reg").value;
        userInfo.postalCode = document.getElementById("postalCode").value;
        userInfo.email = document.getElementById("e-mail").value;
        userInfo.phoneNumber = document.getElementById("phoneNumber").value;
        userInfo.dob = document.getElementById("dateOfBirth").value;
        console.log(userInfo);
        document.getElementById("submited").innerHTML = this.submittedForm;
    }
    submitXHR.open("POST", "formSubit.txt", true);
    submitXHR.send();
}
