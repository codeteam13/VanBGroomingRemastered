/*
  Name: VanBrocklin, Hunter J.
  File name: validation.js
  Date: 5/1/2026
*/

// File created to seperate validation funcs for cleanliness


// Function to validate the appointment form using exception handling (try/catch)
/*
  File name: validation.js
  Purpose: Form validation and exception handling
*/

function validateForm(event) {
    const errorElement = document.getElementById("form-error");
    errorElement.innerHTML = ""; // Clear previous errors
    let errorMessages = [];

    try {
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const phoneInput = document.getElementById("phone").value.trim();
        const serviceType = document.getElementById("service-type").value;
        const petTypeRadios = document.getElementsByName("pet-type");

        // Check if at least one radio button is selected
        let petSelected = false;
        for (let i = 0; i < petTypeRadios.length; i++) {
            if (petTypeRadios[i].checked) {
                petSelected = true;
                break;
            }
        }

        // Validation Rules
        if (nameInput === "") {
            errorMessages.push("- Name is required.");
        }
        if (emailInput === "") {
            errorMessages.push("- Email is required.");
        }

        const numbersOnly = phoneInput.replace(/\D/g, '');
        if (numbersOnly.length < 10) {
            errorMessages.push("- A valid 10-digit phone number is required.");
        }

        if (!petSelected) {
            errorMessages.push("- Please select a Pet Type.");
        }
        if (serviceType === "") {
            errorMessages.push("- Please select an Interested Service.");
        }

        // If any errors exist, throw them all at once
        if (errorMessages.length > 0) {
            throw errorMessages.join("<br>");
        }

        alert("Thank you! Your appointment request has been submitted.");
        return true;

    } catch (error) {
        event.preventDefault();
        errorElement.innerHTML = "Please fix the following errors:<br>" + error;
        return false;
    }
}