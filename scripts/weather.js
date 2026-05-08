/*
  Name: VanBrocklin, Hunter J.
  File name: validation.js
  Date: 5/5/2026
*/

// Grab weather information for Wells



document.addEventListener("DOMContentLoaded", () => {
    // API URL requesting temperature, humidity, rain/snow/clouds and wind speed in dumbass units
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=43.322&longitude=-70.5807&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was bullshit!");
            }
            return response.json();
        })
        .then(data => {
            const current = data.current;
            const temp = current.temperature_2m;
            const humidity = current.relative_humidity_2m;
            const wind = current.wind_speed_10m;
            const code = current.weather_code;

            // Translate the WMO weather code into a readable string
            let conditionText = "Unknown";
            if (code === 0) {
                conditionText = "Clear Skies ☀️";
            } else if (code === 1 || code === 2) {
                conditionText = "Partly Cloudy 🌤️";
            } else if (code === 3) {
                conditionText = "Overcast ☁️";
            } else if (code >= 45 && code <= 48) {
                conditionText = "Foggy 🌫️";
            } else if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
                conditionText = "Rainy 🌧️";
            } else if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
                conditionText = "Snowy ❄️";
            } else if (code >= 95) {
                conditionText = "Thunderstorms ⛈️";
            }

            // Inject the data into the HTML
            document.getElementById("weather-condition").innerHTML = conditionText;
            document.getElementById("weather-temp").innerHTML = temp + " &deg;F";
            document.getElementById("weather-details").innerHTML = "Humidity: " + humidity + "% | Wind: " + wind + " mph";
        })
        .catch(error => {
            document.getElementById("weather-condition").innerHTML = "";
            document.getElementById("weather-temp").innerHTML = "Weather data unavailable.";
            document.getElementById("weather-details").innerHTML = "";
            console.error("Fetch error:", error);

            // this sucked a fat one
        });
});