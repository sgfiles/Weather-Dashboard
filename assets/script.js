
/*fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=a273689a030ae5e5de85babdb5f44883')
.then(response => response.json())
.then(data => console.log(data));*/

var apiKey = "a273689a030ae5e5de85babdb5f44883";
var cityName = document.getElementById('cityName');
var searchBtn = document.querySelector('searchBtn');
var weatherIcon = document.querySelector('.weathericon');
var temperatureEl = document.querySelector('#temperature');
var humidityEl = document.querySelector('#humidity');
var windEl = document.querySelector('#wind');
var uvEl = document.querySelector('#uv');
var nameLong =document.querySelector('#nameLong')
var searchHistory = [];
var city = "";

function showWeather(city) {
  var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily" + city + "&appid=" + apiKey;

  fetch(queryUrl)
  .then(function(respond) {
    return respond.json()

  })
  .then(function(data){
    console.log(data);

   var date = new date(dt*1000);
   nameLong.textContent = data,name + "" + '(' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ')' + '.';
   humidityEl.innerHTML = data.main.humidity;
   var weatherIconId = data.weather[0].icon;
   weatherIcon.innerHTML = `<img src="./icons/${weatherIconId}.png" />`;
   function getuvIndex() {
     var lat = data.coord.lat;
     var lon = data.coord.lon;
     var uvIndexUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&appid=" + apiKey;
     fetch(uvIndexUrl)
     .then(function (res) {
       return res.json()

     })
     .then(function(indexData) {
       uvEl.textContent = indexData.current.uvi;
       if (indexData.current.uvi <= 3 && indexData.current.uvi >= 0) {
         uvEl.setAttribute("class", "uvlow");

       }
     })
     function forecastFiveday() {
       var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&appid=" + apiKey;
       fetch(forecastUrl)
       .then(function (forecast) {
         return forecast.json()
       })
       .then(function (forecastdata) {
         console.log(forecastdata)
       })
       }
    }
  })
}

var citysearch = document.getElementById("previousSearchBtn");

function saveCity() {
  var searchHistory = JSON.parse(localStorage.getItem("search"));
  if (searchHistory !== null) {
    JSON.parse(localStorage.getElementById("search"));
    console.log(searchHistory)
    for (var i= 0; i < searchHistory.length; i++) {
      var li = document.createElement("li");
      li.setAttribute("type", "button");
      li.setAttribute("class", "clickable form-control d-block bg-white")
      li.textcontent = searchHistory [i];
      console.log(li.textContent);
      citysearch.append(li);
    }
  }
}
  document.getElementbyId("searchBtn").addEventListener("click", function () {
  document.getElementById(cityName).innerHTML = "";
  console.log(cityValue)
})