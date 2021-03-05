// Init weather object
const weather = new Weather("London");

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
    weather
        .getWeather()
        .then((results) => {
            ui.paint(results);
        })
        .catch((err) => console.log(err));
}
