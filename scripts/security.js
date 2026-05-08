/*
 Name: VanBrocklin, Hunter J.
 File name: security.js
 Date: 5/2/2026
*/

//Retrieve and display browser BOM properties with exception handling

function displaySecurityInfo() {
    const errorElement = document.getElementById("sec-error");

    try {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        const cookies = navigator.cookieEnabled;
        const screenWidth = screen.width;
        const screenHeight = screen.height;

        if (!screen) {
            throw "Screen object is not supported or accessible by your browser.";
        }

        document.getElementById("prop-ua").innerHTML = userAgent;
        document.getElementById("prop-plat").innerHTML = platform;
        document.getElementById("prop-lang").innerHTML = language;
        document.getElementById("prop-cookies").innerHTML = cookies ? "Yes" : "No";
        document.getElementById("prop-width").innerHTML = screenWidth;
        document.getElementById("prop-height").innerHTML = screenHeight;

    } catch (error) {
        errorElement.innerHTML = "Security Script Error: " + error;
    }
}

function getLocationData() {
    const geoError = document.getElementById("geo-error");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                // Altitude often returns null unless on mobile/GPS-enabled devices
                const alt = position.coords.altitude !== null ? position.coords.altitude + " meters" : "Not available on this device";

                document.getElementById("loc-lat").innerHTML = lat;
                document.getElementById("loc-lon").innerHTML = lon;
                document.getElementById("loc-alt").innerHTML = alt;

                const mapContainer = document.getElementById("map-container");
                const mapFrame = document.getElementById("map-frame");
                mapContainer.style.display = "block";

                const offset = 0.01;
                const bbox = (lon - offset) + "%2C" + (lat - offset) + "%2C" + (lon + offset) + "%2C" + (lat + offset);
                const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox + "&layer=mapnik&marker=" + lat + "%2C" + lon;

                mapFrame.src = mapSrc;
            },
            function(error) {
                geoError.innerHTML = "Location access denied or unavailable: " + error.message;
            }
        );
    } else {
        geoError.innerHTML = "Geolocation is not supported by this browser.";
    }
}

window.onload = function() {
    displaySecurityInfo();
    getLocationData();
};