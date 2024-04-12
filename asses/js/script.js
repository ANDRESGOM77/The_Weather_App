const container = document.querySelector('.container');
const search = document.querySelector('.search-wrapper');
const weatherBox = document.querySelector('.weather-container');
const WeatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    
    const APIKey= '1a48bcdb0ce62b547d026e931fb18bcd';
    const city= Document.querySelector('.search-wrapper input').value;

    if(city===''){
        return;
    }

    fetch('')
});