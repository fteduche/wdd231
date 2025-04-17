const myKey = "f9256650eee23d37d266b7d79e46912e";
const myLat = "9.0563";
const myLon = "7.4985";

const time = new Date();
const day = time.getDay();
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

document.addEventListener("DOMContentLoaded", () => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`;

    async function apiFetch() {
        try {
            const response = await fetch(urlWeather);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error(error);
        }
    }

    const displayResults = (data) => {
        const eventMainBox = document.querySelector("#weather-main");
        eventMainBox.innerHTML = "";

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = data.weather[0].description;

        eventMainBox.innerHTML = `
                <div class="current-weather">
                    <h4><span id="city-name">${
                        data.name
                    }</span></h4><h5>Temp: <span id="current-temp">${parseFloat(
            data.main.temp
        ).toFixed(0)}&deg;F</span> <br><span>${weekdays[day]}</span></h5>
                    <figure>
                        <img id="weather-icon" src="${iconsrc}" alt="${desc}">
                        <figcaption>${desc}</figcaption>
                    </figure>
                </div>
            `;
    };

    apiFetch();
});
