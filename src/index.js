function currentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  let p = document.querySelector("#current-condition");
  let h1 = document.querySelector("#current-city");
  h2.innerHTML = `${temperature}°C`;
  p.innerHTML = response.data.weather[0].description;
  h1.innerHTML = response.data.name;
}

function searchCity(city) {
  let apiKey = "8539eaf09e0166b7c856b19fe9896cfc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let city = document.querySelector("#search-city");
city.addEventListener("submit", search);

function searchLocation(position) {
  let apiKey = "8539eaf09e0166b7c856b19fe9896cfc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(currentWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#get-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let now = new Date();
let date = now.getDate();
function formatDate(now) {
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let year = now.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  return `Today is ${day}, ${month} ${date}, ${year} and the time is ${hours}:${minutes}`;
}
let todaydate = document.querySelector("#date");
todaydate.innerHTML = formatDate(now);
