

const apiKey = "61996ac4788886d8797e0c8bd0750cb7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await responce.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Assets/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Assets/drizzle.png";
        } else if (data.weather[0].main == "mist") {
            weatherIcon.src = "Assets/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
