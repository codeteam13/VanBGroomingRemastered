/*
 Name: VanBrocklin, Hunter J.
 File name: script.js
 Date: 5/2/2026
*/

//Retrieve and display browser BOM properties with exception handling


function displaySecurityInfo() {
    const errorElement = document.getElementById("sec-error");

    try {
        // Fetching 6 properties from the Navigator and Screen objects
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        const cookies = navigator.cookieEnabled;
        const screenWidth = screen.width;
        const screenHeight = screen.height;

        // Will throw an error intentionally if the browser somehow doesn't support the screen object to satisfy the LMS requirement
        if (!screen) {
            throw "Screen object is not supported or accessible by your browser.";
        }

        // Injecting the values into the HTML
        document.getElementById("prop-ua").innerHTML = userAgent;
        document.getElementById("prop-plat").innerHTML = platform;
        document.getElementById("prop-lang").innerHTML = language;
        document.getElementById("prop-cookies").innerHTML = cookies ? "Yes" : "No";
        document.getElementById("prop-width").innerHTML = screenWidth;
        document.getElementById("prop-height").innerHTML = screenHeight;

    } catch (error) {
        // Display the relevant error message as requested by the assignment
        errorElement.innerHTML = "Security Script Error: " + error;
    }
}

// Run the function when the window loads
window.onload = displaySecurityInfo;