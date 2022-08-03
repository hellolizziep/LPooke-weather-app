let today = new Date();
let h3 = document.querySelector("h3");

let hours = today.getHours();
let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];

h3.innerHTML = `${day} ${hours}:${minutes}`;
//part2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h2 = document.querySelector("h2");
  h2.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//week 5!
function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#temperature-here");
  h1.innerHTML = `${temperature}°C`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data.name}`;
}

function showPosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
