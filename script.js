var today = dayjs();
var submitBtn = document.getElementById("submitBtn");
var cityText = document.getElementById("city");
var searchCity = document.getElementById("searchCity")
var forecast = document.getElementById("forecast")

var savedSearches = []
var city;
//get the city the user enters and hold as a variable
//input the variable as a parameter in the url

//how can i get my api url to console log a response
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// var api = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchCity.value + ""
// var apiKey = "&appid=9ff36362da1db93846317a69ddc36a63"
// // var url = api + searchCity + apiKey
// //   "https://api.openweathermap.org/data/2.5/forecast?q=" +
// //   searchCity +
// //   "&appid=9ff36362da1db93846317a69ddc36a63";


//base https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//
function getWeather() {

    city = searchCity.value 
    var apiKey = "9ff36362da1db93846317a69ddc36a63"
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
    fetch(apiUrl)
    .then(function (response) {
    //   console.log(response.json());
      return response.json();
    })
    .then(function (data) {
      cityText.textContent = city + "(" + today.format("MM/DD/YYYY") + ")" + "icon" 
      console.log(data);
    });
    
   
    console.log("I was clicked");
    
    forecast.classList.remove("d-none")
    

  //get the searched city and display the the weather, temp, humidity, icon
  //save the searched city in an empty object????
  //use a for each loop to create a button for each search history
}

function renderButtons() {
    savedSearches.push()
}

submitBtn.addEventListener("click", getWeather);


/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/
