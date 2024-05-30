const apiKey = "7f52e300ddf325526831572cac341e57";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(URL + city +`&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherImg.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Dizzle"){
        weatherImg.src = "images/dizzle.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})