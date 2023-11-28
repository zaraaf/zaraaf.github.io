function formSub() {

    //created an object with the userInfo to make it easier to display.
    const userInfo = {};
     userInfo.fName = document.getElementById("firstName").value;
     userInfo.lName = document.getElementById("lastName").value;
     userInfo.address = document.getElementById("address").value;
     userInfo.city = document.getElementById("city").value;
     userInfo.region = document.getElementById("region").value;
     userInfo.postalCode = document.getElementById("pCode").value;
     userInfo.email = document.getElementById("email").value;
     userInfo.phoneNumber = document.getElementById("pNumber").value;
     userInfo.dob = document.getElementById("dob").value;
    
     console.log(userInfo);
}

function submitForm () {
    const uInfo = {};
    uInfo.fName = document.getElementById("fName").value;
    uInfo.lName = document.getElementById("lName").value;
    uInfo.address = document.getElementById("add").value;
    uInfo.city = document.getElementById("cit").value;
    uInfo.region = document.getElementById("reg").value;
    uInfo.postalCode = document.getElementById("postalCode").value;
    uInfo.email = document.getElementById("e-mail").value;
    uInfo.phoneNumber = document.getElementById("phoneNumber").value;
    uInfo.dob = document.getElementById("dateOfBirth").value;
    console.log(uInfo)
}