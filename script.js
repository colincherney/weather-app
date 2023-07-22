const settings = {
  async: true,
  crossDomain: true,
  url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Scottsdale",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "081943c2e2msh7f5fe2fac37b8f0p1ad24ajsn320412424565",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
