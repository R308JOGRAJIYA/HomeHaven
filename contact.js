function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

if (name ===""){
    alert("Please enter your name.");
    return false;
}
if (email ===""){
    alert("Please enter your email.");
    return false;
}
if (subject ===""){
    alert("Please enter a subject.");
    return false;
}
if (message ===""){
    alert("Please enter a message.");
    return false;
}
alert("Form Submitted Successfully");
return true; }