let apiKey;

function getApiKey(city) {
  fetch("apikey.json")
    .then((response) => response.json())
    .then((json) => (apiKey = json.apikey))
    .then(() => weather(city));
}

function weather(city) {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    //append container
    $(".weatherDisplay").remove();
    $(".search").append('<div class="weatherDisplay"></div>');

    $(".weatherDisplay").append(
      '<h1 id="displayHeader">Current Weather in ' + city + ":</h1>"
    );

    $(".weatherDisplay").append(
      '<h2 id="currentTemp">Temperature: ' + response.temp + "</h2>"
    );

    $(".weatherDisplay").append(
      '<h3 id="feelsLike">Feels Like: ' + response.feels_like + "</h3>"
    );

    //append containers
    $(".weatherDisplay").append('<div class="containers"></div>');

    //Min, Max, and Humidity container
    $(".containers").append('<div class="container">');
    $(".container").append("<h3>Max: " + response.max_temp + "</h3>");
    $(".container").append("<h3>Min: " + response.min_temp + "</h3>");
    $(".container").append("<h3>Humidity: " + response.humidity + "</h3>");

    //Wind speed and direction container
    $(".containers").append('<div class="container" id="wind">');
    $("#wind").append("<h3>Wind Speed: " + response.wind_speed + "</h3>");
    $("#wind").append("<h3>Wind Direction: " + response.wind_degrees + "</h3>");

    //Sunrise and Sunset container
    $(".containers").append('<div class="container" id="sun">');
    $("#sun").append("<h3>Sunrise: " + response.sunrise + "</h3>");
    $("#sun").append("<h3>Sunset: " + response.sunset + "</h3>");
  });
}

$("#go").on("click", function () {
  let city = $("#input").val();
  getApiKey(city);
});
