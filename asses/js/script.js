const cityForm = document.getElementById('city-search');
const cityInput = document.getElementById('city')
const apiKey = '1a48bcdb0ce62b547d026e931fb18bcd';
const currentContainer = document.getElementById('weather-container')
const forecast = document.getElementById('forcast')
const cities = [];



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
            forecastCard(data)
        })
}

function modifingWeatherCard(data) {
    console.log(data);

    const image = document.getElementById('current-img')
    const termperture = document.getElementById('termperture')
    const description = document.getElementById('description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')

    if (data.weather[0].main == "Clouds") {
        image.src = "asses/images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        image.src = "asses/images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        image.src = "asses/images/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        image.src = "asses/images/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        image.src = "asses/images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        image.src = "asses/images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        image.src = "asses/images/snow.png"
    }
    else if (data.weather[0].main == "Wind") {
        image.src = "asses/images/wind.png"
    }

    termperture.innerHTML = `${data.main.temp}°F`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}Km`;
}




function forecastCard(data) {


    for (let i = 7; i < data.list.length; i += 8) {

        const forcastList = data.list[i];
        const date = forcastList.dt_txt;
        const termp = forcastList.main.temp;
        const humi = forcastList.main.humidity;
        const windySpeed = forcastList.wind.speed;
        const image = document.getElementById('forcast-img')

        // if (forcastList.weather[0].main == "Clouds") {
        //     image.src = "asses/images/clouds.png"
        // }
        // else if (forcastList.weather[0].main == "Clear") {
        //     image.src = "asses/images/clear.png"
        // }
        // else if (forcastList.weather[0].main == "Drizzle") {
        //     image.src = "asses/images/drizzle.png"
        // }
        // else if (forcastList.weather[0].main == "Humidity") {
        //     image.src = "asses/images/humidity.png"
        // }
        // else if (forcastList.weather[0].main == "Mist") {
        //     image.src = "asses/images/mist.png"
        // }
        // else if (forcastList.weather[0].main == "Rain") {
        //     image.src = "asses/images/rain.png"
        // }
        // else if (forcastList.weather[0].main == "Snow") {
        //     image.src = "asses/images/snow.png"
        // }
        // else if (forcastList.weather[0].main == "Wind") {
        //     image.src = "asses/images/wind.png"
        // }

        let card = document.createElement('div');
        card.className = 'card';

        let dateF = document.createElement('p');
        dateF.textContent = date;
        let termpF = document.createElement('p');
        termpF.textContent = termp;
        let humiF = document.createElement('p');
        humiF.textContent = humi;
        let windySpeedF = document.createElement('p');
        windySpeedF.textContent = windySpeed;
        // let imageF= document.createElement('img');


        dateF.className = 'date';
        termpF.className = 'termp';
        humiF.className = 'humi';
        windySpeedF.className = 'wondySpeed';
        // imageF.className= 'imageForcast'


        dateF.textContent = date;
        card.append(dateF, termpF, humiF, windySpeedF)
        forecast.append(card)
    }
}

window.onload = () => {
    const form = document.getElementById('city-search')
    form.onsubmit = (event) => {
        event.preventDefault();
        const city = getElementById('city')
        const cityText = city.value;
        const cityList = document.getElementById('places')
        city.value = '';
        cities.push(cityText);
        cityList.innerHTML = '';
        for (let i = 0; i < cities.length; i++) {
            cityList.innerHTML += '<li>' + cities[i] + '</li>';
        }
    }

}

cityForm.addEventListener('submit', handleUserInput)