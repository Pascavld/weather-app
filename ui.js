class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.details = document.getElementById("w-details");
        this.humidity = document.getElementById("w-humidity");
        this.clouds = document.getElementById("w-clouds");
        this.pressure = document.getElementById("w-pressure");
        this.wind = document.getElementById("w-wind");
    }

    paint(weather) {
        let string = weather.main.temp - 270;
        string = string.toFixed(1);

        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${string}°C`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.clouds.textContent = `Clouds: ${weather.clouds.all}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} mmHg`;
        this.wind.textContent = `Wind: ${weather.wind.speed} MPH`;
    }
}
