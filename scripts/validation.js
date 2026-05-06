/*
  Name: VanBrocklin, Hunter J.
  File name: script.js
  Date: 5/1/2026
*/

// File created to seperate validation funcs for cleanliness


/*
  File name: validation.js
  Purpose: Form validation and exception handling
*/

// Function to validate the appointment form using exception handling (try/catch)
function validateForm(event) {
    const errorElement = document.getElementById("form-error");
    errorElement.innerHTML = ""; // Clear previous errors

    try {
        const phoneInput = document.getElementById("phone").value;
        const nameInput = document.getElementById("name").value;

        if (nameInput.trim() === "") {
            throw "Name cannot be empty.";
        }

        // Strip out any non-numeric characters to count the digits
        const numbersOnly = phoneInput.replace(/\D/g, '');

        if (numbersOnly.length < 10) {
            throw "Phone number must contain at least 10 digits.";
        }

        alert("Thank you! Your appointment request has been submitted.");
        return true;

    } catch (error) {
        event.preventDefault();
        errorElement.innerHTML = "Submission Error: " + error;
        return false;
    }
}