// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=14.633&lon=121.033&appid=ddd043892151b2655ed37384bd9fd0e3&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display temperature in Celsius
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Fill in the blanks for icon source
    let desc = data.weather[0].description; // Fill in the blank for weather description
    
    // Ensure that the iconsrc is not empty before setting the src attribute
    if (iconsrc) {
        weatherIcon.setAttribute('src', iconsrc); // Set attribute for src
    } else {
        // Provide a fallback image source if iconsrc is empty
        weatherIcon.setAttribute('src', 'fallback-icon.png');
    }

    weatherIcon.setAttribute('alt', desc); // Set attribute for alt
    captionDesc.textContent = `${desc}`; // Fill in the blank for caption description
}
