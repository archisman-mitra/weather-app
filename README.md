# Weather-App
🌦️ Weather App

A clean, responsive Weather App built using HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API.
This project focuses on core frontend concepts like API handling, async JavaScript, DOM manipulation, and UI/UX design.

🚀 Features

🔍 Search weather by city name
🌡️ Displays temperature (°C), humidity, wind speed
🌅 Shows sunrise & sunset times
🕒 Displays local time of the searched city
🌥️ Weather condition with icon
❌ Graceful error handling (City not found)
🎨 Modern dark UI with smooth animations
📱 Responsive design (mobile-friendly)

🛠️ Tech Stack

HTML5 – Semantic structure
CSS3 – Custom dark theme, gradients, responsive layout
JavaScript (ES6+)
Fetch API
Async / Await
DOM manipulation
OpenWeatherMap API

⚙️ How It Works

User enters a city name and clicks Search
App calls OpenWeatherMap API using fetch()
Weather data is received as JSON
Relevant fields are extracted:
Temperature
Weather description
Wind, humidity
Sunrise & sunset (with timezone handling)

🧠 Key Learnings

How to work with external APIs
Handling HTTP errors (404, network issues)
Using async/await correctly
Understanding UNIX timestamps & timezones
Importance of CSS contrast and UI hierarchy
Debugging real-world frontend issues

❌ Error Handling

If the city is not found:
Weather result is hidden
A clear error message is shown to the user
Prevents app crashes or broken UI

🔐 API Key Setup

This app uses OpenWeatherMap API.
Get a free API key from:
👉 https://openweathermap.org/api
In weather.js, replace:
const API_KEY = 'YOUR_API_KEY_HERE';

⚠️ Note:
API keys should not be exposed in production apps.
This is acceptable for learning/demo purposes only.

👤 Author

Archisman Mitra
Learning by building real projects 🚀

⭐ Acknowledgements

OpenWeatherMap API
Inspiration from modern weather dashboards
Data is rendered dynamically in the UI

Errors (like invalid city names) are handled gracefully
