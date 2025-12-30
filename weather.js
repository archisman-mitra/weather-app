document.addEventListener('DOMContentLoaded', () => {

const API_KEY = '7bf3f09e01f4eabee9483d21e48df0ed';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

// Sanity check
console.log('Weather app JS loaded');

const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('searchBtn');
const statusEl = document.getElementById('status');

const resultSection = document.getElementById('result');
const cityNameEl = document.getElementById('cityName');
const descEl = document.getElementById('desc');
const tempEl = document.getElementById('temp');
const iconEl = document.getElementById('icon');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const sunriseEl = document.getElementById('sunrise');
const sunsetEl = document.getElementById('sunset');
const localTimeEl = document.getElementById('localTime');

// Sanity check
console.log('DOM wired',cityInput,searchBtn,statusEl);

// Helper: update status message
function setStatus(msg, isError = false) 
{
  statusEl.textContent = msg;
  statusEl.style.color = isError ? '#ffbaba' : '';
}

// format unix timestamp + timezone offset to local time string
function formatTime(tsSeconds, tzOffsetSeconds) 
{
  const d = new Date((tsSeconds + tzOffsetSeconds)*1000);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
// format current local time in city
function cityLocalTime(tzOffsetSeconds) 
{
  const nowUtcSec = Math.floor(Date.now() / 1000);
  return formatTime(nowUtcSec, tzOffsetSeconds);
}
function iconUrl(iconCode)
{
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
function doSearch()
{
  const city = cityInput.value.trim();

  if (!city)
  {
    console.log('No city entered');
    return;
  }
  console.log('Searching for city:', city);

  fetchWeather(city).then(data => {
    console.log('API response:',data);
    renderWeather(data);
  });
}

async function fetchWeather(city)
{
  const url = `${ENDPOINT}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  console.log('Fetching URl: ',url);

  const response= await fetch(url);
  const data = await response.json();
   if (response.status === 404) throw new Error('City not found');
   
  return data;
}

function renderWeather(data) {
  const { name, sys, weather, main, wind: windData, timezone } = data;
  const w = weather[0];

  cityNameEl.textContent = `${name}, ${sys.country}`;
  descEl.textContent = w.description;
  tempEl.textContent = Math.round(main.temp);

  iconEl.src = iconUrl(w.icon);
  iconEl.alt = w.description;

  humidityEl.textContent = main.humidity;
  windEl.textContent = windData.speed;

  sunriseEl.textContent = sys.sunrise ? formatTime(sys.sunrise, timezone) : '—';

  sunsetEl.textContent = sys.sunset ? formatTime(sys.sunset, timezone) : '—';

  localTimeEl.textContent = cityLocalTime(timezone);

  resultSection.classList.remove('hidden');
  setStatus('Weather loaded.');
}

// Button click
searchBtn.addEventListener('click',doSearch);
// Enter key in input
cityInput.addEventListener('keydown',(e)=>{
  if (e.key==='Enter')
  {
    doSearch();
  }
});
});