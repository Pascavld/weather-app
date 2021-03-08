// Init weather object
const weather = new Weather("Bucharest");

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;

    // change location
    weather.changeLocation(city);

    // get and display weather
    getWeather();

    // close modal
    $("#locModal").modal("hide");
});

function getWeather() {
    weather
        .getWeather()
        .then((results) => {
            ui.paint(results);
        })
        .catch((err) => console.log(err));
}
