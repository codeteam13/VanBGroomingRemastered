/*
  Name: VanBrocklin, Hunter J.
  File name: script.js
  Date: 12/06/2025
*/

// Function to toggle the mobile menu dropdown -- hopefully (I hate js)
function toggleMenu() {
    let menu = document.getElementById("nav-list");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

// Function to calculate tip and total cost for the tip
// function calculateTip() {
//     let cost = parseFloat(document.getElementById("service-cost").value);
//     let tipPct = parseFloat(document.getElementById("tip-percent").value);
//
//     if (isNaN(cost) || isNaN(tipPct)) {
//         document.getElementById("total-cost").innerHTML = "Please enter valid numbers.";
//         return;
//     }
//
//     let tipAmount = cost * (tipPct / 100);
//     let total = cost + tipAmount;
//
//     document.getElementById("total-cost").innerHTML = "Tip: $" + tipAmount.toFixed(2) + " | Total: $" + total.toFixed(2);
// }

// Converted The above function to use some jquery
// Selectors 1 & 2 using jQuery and .val()

function calculateTip() {
const cost = parseFloat($("#service-cost").val());
const tipPct = parseFloat($("#tip-percent").val());

// Selector 3 using jQuery, .html(), and .css() to fulfill the CSS change requirement
if (isNaN(cost) || isNaN(tipPct)) {
    $("#total-cost")
        .html("Please enter valid numbers.")
        .css("color", "red");
    return;
}

const tipAmount = cost * (tipPct / 100);
const total = cost + tipAmount;

$("#total-cost")
    .html("Tip: $" + tipAmount.toFixed(2) + " | Total: $" + total.toFixed(2))
    .css("color", "#0056b3");
}

// Function to determine pet size category using if/else if statements
// function checkSize() {
//     const weight = parseFloat(document.getElementById("pet-weight").value);
//     const resultElement = document.getElementById("size-result");
//
//     if (isNaN(weight) || weight <= 0) {
//         resultElement.innerHTML = "Please enter a valid weight.";
//     } else if (weight <= 20) {
//         resultElement.innerHTML = "Category: Small (0 - 20 lbs)";
//     } else if (weight <= 50) {
//         resultElement.innerHTML = "Category: Medium (21 - 50 lbs)";
//     } else if (weight <= 90) {
//         resultElement.innerHTML = "Category: Large (51 - 90 lbs)";
//     } else {
//         resultElement.innerHTML = "Category: Extra Large (91+ lbs)";
//     }
//}

// Function to determine pet size category using the new PetClient object
function checkSize() {
    const weightInput = parseFloat(document.getElementById("pet-weight").value);
    const resultElement = document.getElementById("size-result");

    if (isNaN(weightInput) || weightInput <= 0) {
        resultElement.innerHTML = "Please enter a valid weight.";
        return;
    }

    // Create a new instance of the PetClient object using the input weight
    // (Using placeholder strings for name and type since the form only asks for weight)
    const currentPet = new PetClient("Guest Pet", "Unknown", weightInput);
    // NOTE: I should update the form to include this information....would be much better overall

    // Call the prototype method to get the category and display it
    resultElement.innerHTML = "Category: " + currentPet.getSizeCategory();
}
