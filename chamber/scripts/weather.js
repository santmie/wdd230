// select HTML elements in the document
document.addEventListener('DOMContentLoaded', function() {
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastList = document.querySelector('#forecast-list');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=14.633&lon=121.033&appid=ddd043892151b2655ed37384bd9fd0e3&units=metric";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=14.633&lon=121.033&appid=ddd043892151b2655ed37384bd9fd0e3&units=metric";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayWeather() {
    const currentWeather = await apiFetch(url);
    const forecastWeather = await apiFetch(forecastUrl);

    currentTemp.innerHTML = `${currentWeather.main.temp}°C`; // Display temperature in Celsius
    const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`; 
    let desc = currentWeather.weather[0].description; 
    // Ensure that the iconsrc is not empty before setting the src attribute
    if (iconsrc) {
        weatherIcon.setAttribute('src', iconsrc); // Set attribute for src
    } else {
        // Provide a fallback image source if iconsrc is empty
        weatherIcon.setAttribute('src', 'fallback-icon.png');
    }

    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    // Display forecast data
    forecastList.innerHTML = ""; // Clear previous forecast data
    const dailyForecastData = filterDailyForecast(forecastWeather.list);
    dailyForecastData.forEach(forecast => {
        const forecastItem = document.createElement('li');
        forecastItem.textContent = `${formatDate(forecast.date)}: ${forecast.temp}°C`;
        forecastList.appendChild(forecastItem);
    });
}

// Function to filter forecast data to get only one data point per day
function filterDailyForecast(forecastData) {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0];
    const thirdDay = new Date(currentDate);
    thirdDay.setDate(currentDate.getDate() + 3); // Get the date for the third day
    const thirdDayString = thirdDay.toISOString().split('T')[0]; 
    
    const dailyForecast = {};
    forecastData.forEach(item => {
        const date = item.dt_txt.split(' ')[0]; // Extract date from date-time string
        if (date !== currentDateString && date <= thirdDayString && item.dt_txt.includes('12:00:00')) {
            dailyForecast[date] = {
                date: date,
                temp: item.main.temp
            };
        }
    });
    return Object.values(dailyForecast);
}

// format date as month/day/year
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Month is zero-based, so we add 1
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

displayWeather();

});