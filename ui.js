class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.currentDate = document.getElementById("w-string-currentDate");
        this.desc = document.getElementById("w-desc");
        this.stringTemp = document.getElementById("w-string-temp");
        this.stringDayNight = document.getElementById("w-string-day-night");
        this.details = document.getElementById("w-details");
        this.feels = document.getElementById("w-feels-like");
        this.humidity = document.getElementById("w-humidity");
        this.pressure = document.getElementById("w-pressure");
        this.wind = document.getElementById("w-wind");
    }

    paint(weather) {
        let stringTemp = convertTemp(weather.main.temp);
        let stringFeels = convertTemp(weather.main.feels_like);
        let stringDay = convertTemp(weather.main.temp_max);
        let stringNight = convertTemp(weather.main.temp_min);

        let stringWind = weather.wind.speed;

        this.location.textContent = `What's the weather like today in ${weather.name} ?`;
        this.desc.textContent = weather.weather[0].description;
        this.stringTemp.textContent = `${stringTemp}°C`;
        this.stringDayNight.textContent =
            `Day: ${stringDay}°C ` + "|" + ` Night: ${stringNight}°C`;
        this.feels.textContent = `Feels like: ${stringFeels}°C`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;
        this.wind.textContent = `Wind: ${stringWind}km/h`;
    }
}

function convertTemp(temp) {
    temp = temp - 273.15;
    temp = temp.toFixed(1);

    return temp;
}
