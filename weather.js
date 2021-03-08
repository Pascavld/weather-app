class Weather {
    constructor(city) {
        this.apiKey = "1efa77b2b4e08a6805ed594b7bd635ce";
        this.city = city;
    }

    // Fetch weather from API

    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
        );

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
