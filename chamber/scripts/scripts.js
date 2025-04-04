// Get the current weather data from OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        const currentWeather = document.getElementById('current-weather');
        currentWeather.textContent = `Current Temperature: ${data.main.temp}°C`;
        currentWeather.textContent += `\nWeather Description: ${data.weather[0].description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));

//const apiKey = 'YOUR_API_KEY';
const city = 'YOUR_CITY';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(data.main.temp);
        const weatherDescription = data.weather.map(event => event.description.charAt(0).toUpperCase() + event.description.slice(1)).join(', ');
        document.getElementById('weather-info').innerHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;
    });

const spotlightData = [
    {
        name: "Gold Member Company",
        logo: "images/gold_member_logo.png",
        phone: "123-456-7890",
        address: "123 Gold St, City, State",
        website: "http://goldmember.com",
        level: "Gold"
    },
    {
        name: "Silver Member Company",
        logo: "images/silver_member_logo.png",
        phone: "098-765-4321",
        address: "456 Silver Ave, City, State",
        website: "http://silvermember.com",
        level: "Silver"
    }
];

const randomSpotlights = spotlightData.sort(() => 0.5 - Math.random()).slice(0, 3);
const spotlightCards = randomSpotlights.map(member => `
    <div class="spotlight-card">
        <img src="${member.logo}" alt="${member.name} Logo">
        <h3>${member.name}</h3>
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p>Website: <a href="${member.website}">${member.website}</a></p>
        <p>Membership Level: ${member.level}</p>
    </div>
`).join('');

document.getElementById('spotlight-cards').innerHTML = spotlightCards;
