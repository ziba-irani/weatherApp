// const apiKey = "803085de0d51e5bde5b4a5a5af6c2b82";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=qazvin";
// // documents Texts
// const cityText = document.querySelector(".city");
// const cityTemp = document.querySelector(".temp");
// const cityhumidity = document.querySelector(".humidity");
// const cityWind = document.querySelector(".wind");
// let userCity = document.getElementById("userCity");
// const weatherIcon = document.querySelector(".weather-icon");
// const weatherPart=document.querySelector(".weather");
// async function checkWeather() {
//   let userCityValue = userCity.value;
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${userCityValue}&appid=${apiKey}&units=metric`
//   );
//   const data = await res.json();
//   console.log(data);
//   console.log(data.name, data.weather[0], data.main[0]);
//   cityText.innerHTML = data.name;
//   cityTemp.innerHTML = Math.round(data.main.temp) + "°C";
//   cityhumidity.innerHTML = data.main.humidity + "%";
//   cityWind.innerHTML = data.wind.speed + " km/h";
//   userCity.value = "";
//   console.log(data.weather[0].main);
//   if (data.weather[0].main === "Clouds") {
//     weatherIcon.src = "./img/clouds.png./";
//   } else if (data.weather[0].main === "Clear") {
//     weatherIcon.src = "./img/clear.png";
//   } else if (data.weather[0].main === "Rain") {
//     weatherIcon.src = "./img/rain.png";
//   } else if (data.weather[0].main === "Drizzle") {
//     weatherIcon.src = "./img/drizzle.png";
//   } else if (data.weather[0].main === "Mist") {
//     weatherIcon.src = "./img/mist.png";
//   }
//   weatherPart.style.display="block";

//   saveData();
// }
// function saveData() {
//   localStorage.setItem("cityInfo", userCity.value);
// }
// function showData() {
//   userCity.value = localStorage.getItem("cityInfo");
// }
// showData();
////////////////////////////////////////
const apiKey = "803085de0d51e5bde5b4a5a5af6c2b82";
let userCity = document.getElementById("userCity");
const tempText = document.querySelector(".temp");
const cityText = document.querySelector(".city");
const humidityText = document.querySelector(".humidity");
const windText = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
async function checkWeather() {
  let userCityValue = userCity.value;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userCityValue}&appid=${apiKey}&units=metric`
  );
  if (res.status === 200) {
    weatherDetails(res);
  } else {
    error.style.display = "block";
    weather.style.display = "none";
  }
  userCity.value = "";
}
async function weatherDetails(res) {
  const data = await res.json();
  tempText.innerHTML = Math.round(data.main.temp);
  cityText.innerHTML = data.name;
  humidityText.innerHTML = data.main.humidity;
  windText.innerHTML = data.wind.speed;
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "assets/img/clouds.png";
    case "Clear":
      weatherIcon.src = "assets/img/clear.png";
    case "Rain":
      weatherIcon.src = "assets/img/rain.png";
    case "Drizzle":
      weatherIcon.src = "assets/img/drizzle.png";
    case "Mist":
      weatherIcon.src = "assets/img/mist.png";
    default:
  }
  weather.style.display = "block";
}
