const cityForm = document.getElementById('city-search');
const cityInput = document.getElementById('city')
const apiKey = '1a48bcdb0ce62b547d026e931fb18bcd';
const currentContainer = document.getElementById('weather-container')
const forecast = document.getElementById('forcast')
let cities = JSON.parse(localStorage.getItem("cities"));
const citiesContainer = document.getElementById("buttons");

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
            saveCity(data)
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
            saveCity(data)
        })
}
function saveCity() {
    let citiesSave;
    if (!cities) {
        citiesSave = []
    }
    else {
        citiesSave = cities.slice();
    }
    for (let i = 0; i < data.length; i++) {
        let City = {
            city: data[0].city,
            date: dayjs(data[i].date),
            temp: Math.round(data[i].temp),
            wind: data[i].wind,
            humidity: data[i].humidity,
        };
        citiesSave.push(City);
    }
    cities = citiesSave;
    console.log(cities)
    localStorage.setItem("cities", JSON.stringify(citiesSave));
}

function createCityButton(city) {
    const cityButton = document.createElement("button");
    cityButton.classList.add("btn", "btn-light");
    cityButton.setAttribute("data-city", city);
    cityButton.textContent = `${city}`;
  
    citiesContainer.appendChild(cityButton);
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


        let card = document.createElement('div');
        card.className = 'card';

        let dateF = document.createElement('p');
        dateF.textContent = 'Date: ' + date;
        let termpF = document.createElement('p');
        termpF.textContent = 'Temperture: ' + '' + termp;
        let humiF = document.createElement('p');
        humiF.textContent = 'Humidity: '+ humi;
        let windySpeedF = document.createElement('p');
        windySpeedF.textContent = 'Wind Speed: ' + windySpeed;


        dateF.className = 'date';
        termpF.className = 'termp';
        humiF.className = 'humi';
        windySpeedF.className = 'wondySpeed';


        dateF.textContent = date;
        card.append(dateF, termpF, humiF, windySpeedF)
        forecast.append(card)
    }
}

  cityForm.addEventListener('submit', handleUserInput)