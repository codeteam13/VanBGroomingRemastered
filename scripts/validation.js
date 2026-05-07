/*
  Name: VanBrocklin, Hunter J.
  File name: validation.js
  Date: 5/1/2026
*/

// File created to seperate validation funcs for cleanliness

// Array to hold the selected add-on options
let selectedAddons = [];

document.addEventListener("DOMContentLoaded", function() {
    const addonCheckboxes = document.querySelectorAll(".addon-checkbox");

    addonCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            const value = event.target.value;
            if (event.target.checked) {
                selectedAddons.push(value);
            } else {
                const index = selectedAddons.indexOf(value);
                if (index > -1) {
                    selectedAddons.splice(index, 1);
                }
            }
            const addonsString = selectedAddons.join(", ");
            const outputElement = document.getElementById("addon-output");
            if (selectedAddons.length > 0) {
                outputElement.innerHTML = "Add-ons selected: " + addonsString;
            } else {
                outputElement.innerHTML = "";
            }
        });
    });
});

function validateForm(event) {
    const errorElement = document.getElementById("form-error");
    errorElement.innerHTML = "";
    let errorMessages = [];

    try {
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const phoneInput = document.getElementById("phone").value.trim();
        const serviceType = document.getElementById("service-type").value;
        const petTypeRadios = document.getElementsByName("pet-type");

        let petSelected = false;
        for (let i = 0; i < petTypeRadios.length; i++) {
            if (petTypeRadios[i].checked) {
                petSelected = true;
                break;
            }
        }

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

        if (errorMessages.length > 0) {
            throw errorMessages.join("<br>");
        }

        // Call the function from storage.js to save the data
        if (typeof saveFormData === "function") {
            saveFormData(nameInput, emailInput);
        }

        alert("Thank you! Your appointment request has been submitted.");
        return true;

    } catch (error) {
        event.preventDefault();
        errorElement.innerHTML = "Please fix the following errors:<br>" + error;
        return false;
    }
}