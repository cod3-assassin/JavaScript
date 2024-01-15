const apiKey = "f6d16326d6cb9c5963cc5c0a5b22c80c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcons.src = "image/Clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcons.src = "image/Clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcons.src = "image/heavy-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcons.src = "image/.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcons.src = "image/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcons.src("image/snowy.png");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
