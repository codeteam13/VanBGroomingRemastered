/*
  Name: VanBrocklin, Hunter J.
  File name: validation.js
  Date: 5/3/2026
*/

// Check if data exists in local storage and pre-fill the form on load
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("vbg_name")) {
        const nameField = document.getElementById("name");
        if (nameField) nameField.value = localStorage.getItem("vbg_name");
    }
    if (localStorage.getItem("vbg_email")) {
        const emailField = document.getElementById("email");
        if (emailField) emailField.value = localStorage.getItem("vbg_email");
    }
});

// Function to be called from validation.js to save the data
function saveFormData(name, email) {
    localStorage.setItem("vbg_name", name);
    localStorage.setItem("vbg_email", email);
}