// JavaScript Document for form validation

function checkEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validateRegistration() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var gender = document.querySelector('input[name="rdgen"]:checked');
    var edu = document.getElementById("edu");

    if (name.trim() == "") {
        alert("Enter full name please");
        document.getElementById("name").focus();
        return false;
    }
    if (!checkEmail(email)) {
        alert("Enter Valid E-mail Address");
        document.getElementById("email").focus();
        return false;
    }
    if (mobile.trim() == "" || isNaN(mobile)) {
        alert("Enter valid Contact Number");
        document.getElementById("mobile").focus();
        return false;
    }
    if (mobile.length != 10) {
        alert("Mobile number should be 10 digits");
        document.getElementById("mobile").focus();
        return false;
    }
    if (password.trim() == "") {
        alert("Input Password");
        document.getElementById("password").focus();
        return false;
    }
    if (password.length < 6) {
        alert("Minimum 6 characters required for password");
        document.getElementById("password").focus();
        return false;
    }
    if (repassword.trim() == "") {
        alert("Input Confirm Password");
        document.getElementById("repassword").focus();
        return false;
    }
    if (repassword !== password) {
        alert("Passwords do not match");
        document.getElementById("repassword").focus();
        return false;
    }
    if (!gender) {
        alert("Select proper gender");
        return false;
    }
    if (edu.selectedIndex == 0) {
        alert("Select proper education option");
        edu.focus();
        return false;
    }

    // Populate confirm details page
    document.getElementById("confirm_name").textContent = name;
    document.getElementById("confirm_email").textContent = email;
    document.getElementById("confirm_mobile").textContent = mobile;
    document.getElementById("confirm_gender").textContent = gender.value;
    document.getElementById("confirm_edu").textContent = edu.options[edu.selectedIndex].text;

    // Show confirm details page, hide registration form
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("confirmDetails").style.display = "block";
}

function confirmRegistration() {
    // Perform any additional processing here, if needed

    // Show success page, hide confirm details page
    document.getElementById("confirmDetails").style.display = "none";
    document.getElementById("successPage").style.display = "block";
}
