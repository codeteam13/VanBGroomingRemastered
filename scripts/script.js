/*
  Name: VanBrocklin, Hunter J.
  File name: script.js
  Date: 12/06/2025
*/

// Function to toggle the mobile menu dropdown -- hopefully (I hate js)
function toggleMenu() {
    var menu = document.getElementById("nav-list");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}