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
  });
}

$("#go").on("click", function () {
  let city = $("#location").val();
  getApiKey(city);
});
