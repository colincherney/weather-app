let apiKey;

function getApiKey() {
  fetch("apikey.json")
    .then((response) => response.json())
    .then((json) => (apiKey = json.apikey))
    .then(() => weather());
}

function weather() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Scottsdale",
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
