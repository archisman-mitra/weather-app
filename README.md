# 🌦️ Weather-App

A clean, responsive Weather App built using HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API.
This project focuses on core frontend concepts like API handling, async JavaScript, DOM manipulation, and UI/UX design.

## 🚀 Features

- 🔍 Search weather by **city name**
- 🌡️ Displays **current temperature (°C)**
- 🌥️ Weather description with **dynamic icon**
- 💧 Humidity and 🌬️ wind speed
- 🌅 **Sunrise & sunset time** (timezone-aware)
- 🕒 Displays **local time of the searched city**
- ❌ Graceful **error handling** for invalid cities
- 🎨 Clean **dark UI** with gradients and animations
- 📱 Fully **responsive design**

## 🛠️ Tech Stack

- **HTML5** — Semantic and accessible markup  
- **CSS3** — Dark theme, gradients, animations, responsive layout  
- **JavaScript (ES6+)**
  - Fetch API
  - Async / Await
  - DOM manipulation
- **OpenWeatherMap API**
## ⚙️ **How the App Works**

1. User enters a city name and clicks **Search**
2. JavaScript builds the API request URL
3. Weather data is fetched using the **Fetch API**
4. JSON response is parsed and relevant data is extracted
5. UI updates dynamically with weather details
6. Errors (e.g., city not found) are handled gracefully

## 🧠 Key Learnings

Working with real-world REST APIs
Handling HTTP errors (404, network issues)
Understanding UNIX timestamps & timezones
Writing clean, modular JavaScript
Debugging UI and CSS contrast issues
Importance of user-friendly error messages

## ❌ Error Handling

If the city is not found:
Weather result is hidden
A clear error message is shown to the user
Prevents app crashes or broken UI

## 🔐 API Key Setup

This project uses the **OpenWeatherMap API**.

1. Get a free API key from:  
   👉 https://openweathermap.org/api

2. Replace the API key in `weather.js`:
   ```js
   const API_KEY = 'YOUR_API_KEY_HERE';

⚠️ Note:
API keys should not be exposed in production apps.
This setup is acceptable for learning and demo purposes.

## 👤 Author

Archisman Mitra

Learning by building real projects 🚀

## ⭐ Acknowledgements

OpenWeatherMap API
Inspiration from modern weather dashboards
Data is rendered dynamically in the UI

Errors (like invalid city names) are handled gracefully
