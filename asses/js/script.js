const cityForm = document.getElementById('city-search');
const cityInput = document.getElementById('city')
const apiKey = '1a48bcdb0ce62b547d026e931fb18bcd';
const currentContainer = document.getElementById('weather-container')

function handleUserInput(event) {
    event.preventDefault()

    const userInput = cityInput.value
    runWeather(userInput)
    runForecast(userInput)
}

function runWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            modifingWeatherCard(data);
        })
}

function runForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
}

function modifingWeatherCard(data) {
    console.log(data);
    
    const image = document.getElementById('current-img')
    const termperture = document.getElementById('termperture')
    const description = document.getElementById('description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')
    
    if (data.weather[0].main=="Clouds"){
        image.src="asses/images/clouds.png"
    }
    else if (data.weather[0].main=="Clear"){
        image.src="asses/images/clear.png"
    }
    else if (data.weather[0].main=="Drizzle"){
        image.src="asses/images/drizzle.png"
    }
    else if (data.weather[0].main=="Humidity"){
        image.src="asses/images/humidity.png"
    }
    else if (data.weather[0].main=="Mist"){
        image.src="asses/images/mist.png"
    }
    else if (data.weather[0].main=="Rain"){
        image.src="asses/images/rain.png"
    }
    else if (data.weather[0].main=="Snow"){
        image.src="asses/images/snow.png"
    }
    else if (data.weather[0].main=="Wind"){
        image.src="asses/images/wind.png"
    }

    termperture.innerHTML = `${data.main.temp}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}Km`;
}

cityForm.addEventListener('submit', handleUserInput)