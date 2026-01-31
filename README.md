# 🌤 Weather Dashboard

A responsive Weather Dashboard web application that displays real-time weather data and a 5-day forecast for any city in the world using the OpenWeather API.

## 🚀 Live Demo
👉 https://https://ayubemmanuel.github.io/Weather-dashboard/

---

## 📌 Features

- Search weather by city name
- Auto-detect weather using your current location (Geolocation)
- Displays:
  - Temperature
  - Weather description
  - Humidity
  - Wind speed
  - Weather icon
- 5-Day weather forecast
- Dynamic background based on weather condition
- Loading indicator and error handling
- Clean, responsive dashboard UI

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeather API
- GitHub Pages (Deployment)

---

## 📷 Screenshot

Screenshot.png

---

## ⚙️ How It Works

The app fetches live weather data from the OpenWeather API using JavaScript `fetch()` and updates the DOM dynamically to display current weather and forecast information.

---

## 🔑 API Setup

1. Get a free API key from: https://openweathermap.org/api
2. Replace the API key inside `script.js`:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
