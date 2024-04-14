const container = document.querySelector('.container');
const search = document.querySelector('.search-wrapper');
const weatherBox = document.querySelector('.weather-container');
const WeatherDetails = document.querySelector('.weather-details');
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const apiUrlDays="api.openweathermap.org/data/2.5/forecast?&"


search.addEventListener('click', () => {
    
    const APIKey= '1a48bcdb0ce62b547d026e931fb18bcd';
    const city= Document.querySelector('.search-wrapper input').value;

    if(city==='')
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    .then(Response => Response.json())
    .then(json => {
        const image = document.querySelector('.weather img')
        const termperture = document.querySelector('.weather .termperture')
        const description = document.querySelector('.weather .description')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')

        switch(json.weather[0].main){
            case 'Clear':
                image.src = '/asses/images/clear.png';
                break;
            case 'Rain':
                image.src = '/asses/images/rain.png';
                break;
            case 'Snow':
                image.src = '/asses/images/snow.png';
                break;
            case 'clouds':
                image.src = '/asses/images/clouds.png';
                break;
            case 'Mist':
                image.src = '/asses/images/mist.png';
                break;
            case 'Haze':
                image.src = '/asses/images/drizzle.png';
                break;
            default:
                image.src = '/asses/images/clear.png';
        }
        termperture.innerHTML=`${parseInt(json.main.temp)}<sup>c</sup>`;
        description.innerHTML=`${parseInt(json.weather[0].description)}<sup>c</sup>`;
        humidity.innerHTML=`${parseInt(json.main.humidity)}%`;
        wind.innerHTML=`${parseInt(json.main.temp)}Km`;
    })
});