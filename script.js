const apiKey = "c054c811c085fce1e9391949730d08c1";

function setBackground(weather) {
    if (weather.includes("cloud")) {
        document.body.style.backgroundImage = "url('https://i.imgur.com/8fK4h6R.jpg')";
    } else if (weather.includes("rain")) {
        document.body.style.backgroundImage = "url('https://i.imgur.com/QZ7Z6.jpg')";
    } else if (weather.includes("clear")) {
        document.body.style.backgroundImage = "url('https://i.imgur.com/W6bGq.jpg')";
    } else {
        document.body.style.background = "#87CEEB";
    }
}

function showLoader(show) {
    document.getElementById("loader").classList.toggle("hidden", !show);
}

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    fetchWeatherByCity(city);
}

async function fetchWeatherByCity(city) {
    showLoader(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
        alert("data.message");
        showLoader(false);
        return;
    }

    displayCurrentWeather(data);
    fetchForecast(data.coord.lat, data.coord.lon);
}

function displayCurrentWeather(data) {
    showLoader(false);

    document.getElementById("currentWeather").classList.remove("hidden");
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("temp").innerText = data.main.temp + " °C";
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;

    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("icon").src = icon;

    setBackground(data.weather[0].description.toLowerCase());
}

async function fetchForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    document.getElementById("forecastTitle").classList.remove("hidden");

    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    daily.slice(0, 5).forEach(day => {
        const div = document.createElement("div");
        div.className = "forecast-day";

        div.innerHTML = `
            <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
            <p>${day.main.temp}°C</p>
        `;

        forecastDiv.appendChild(div);
    });
}

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        displayCurrentWeather(data);
        fetchForecast(latitude, longitude);
    });
}


function setBackground(weather) {
    if (weather.includes("cloud")) {
        document.body.style.backgroundImage = "url('https://i.imgur.com/8fK4h6R.jpg')";
    } else if (weather.includes("rain")) {
        document.body.style.backgroundImage = "url('https://i.imgur.com/QZ7Z6.jpg')";
    } else if (weather.includes("clear")) {
        document.body.style.backgroundImage = "url('https://i.imgur.com/W6bGq.jpg')";
    } else {
        document.body.style.background = "#87CEEB";
    }
}

function showLoader(show) {
    document.getElementById("loader").classList.toggle("hidden", !show);
}

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    fetchWeatherByCity(city);
}

async function fetchWeatherByCity(city) {
    showLoader(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
        alert("City not found");
        showLoader(false);
        return;
    }

    displayCurrentWeather(data);
    fetchForecast(data.coord.lat, data.coord.lon);
}

function displayCurrentWeather(data) {
    showLoader(false);

    document.getElementById("currentWeather").classList.remove("hidden");
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("temp").innerText = data.main.temp + " °C";
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;

    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("icon").src = icon;

    setBackground(data.weather[0].description.toLowerCase());
}

async function fetchForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    document.getElementById("forecastTitle").classList.remove("hidden");

    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    daily.slice(0, 5).forEach(day => {
        const div = document.createElement("div");
        div.className = "forecast-day";

        div.innerHTML = `
            <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
            <p>${day.main.temp}°C</p>
        `;

        forecastDiv.appendChild(div);
    });
}

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        displayCurrentWeather(data);
        fetchForecast(latitude, longitude);
    });
}
