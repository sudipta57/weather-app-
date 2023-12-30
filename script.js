async function fetchWeather(city) {
  document.getElementById("cityName").innerHTML = city;
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city; // Add "=" after "city"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88875402d8msh8eaff9501e4aa84p14713fjsn386a6a629245",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    // Access the properties from the data object and update the HTML content
    document.getElementById("temp").innerHTML = data.temp;
    document.getElementById("temp2").innerHTML = data.temp;
    document.getElementById("Min_temp").innerHTML = data.min_temp;
    document.getElementById("Max_temp").innerHTML = data.max_temp;
    document.getElementById("Feels_like").innerHTML = data.feels_like;
    document.getElementById("Humidity").innerHTML = data.humidity;
    document.getElementById("Humidity2").innerHTML = data.humidity;
    document.getElementById("Wind_speed").innerHTML = data.wind_speed;
    document.getElementById("Wind_speed2").innerHTML = data.wind_speed;
    document.getElementById("Wind_degrees").innerHTML = data.wind_degrees;
    document.getElementById("Sunrise").innerHTML = data.sunrise;
    document.getElementById("Sunset").innerHTML = data.sunset;
    document.getElementById("Cloud_pct").innerHTML = data.cloud_pct;
  } catch (error) {
    console.error(error);
  }
  document.getElementById("submit").addEventListener("click", (e) => {
    const cityInput = document.getElementById("city"); // Get the city input element
    fetchWeather(cityInput.value); // Get the value from the input element
    e.preventDefault();
  });
}
async function fetchWeatherForOtherCity(city) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city; // Add "=" after "city"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88875402d8msh8eaff9501e4aa84p14713fjsn386a6a629245",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    // Access the properties from the data object and update the HTML content
    document.getElementsByClassName("td-temp").innerHTML = data.temp;
    document.getElementsByClassName("tdMin-temp").innerHTML = data.min_temp;
    document.getElementsByClassName("tdMax-temp").innerHTML = data.max_temp;
    document.getElementsByClassName("tdFeels-like").innerHTML = data.feels_like;
    document.getElementsByClassName("tdHumidity").innerHTML = data.humidity;
    document.getElementsByClassName("tdWind_speed").innerHTML = data.wind_speed;
    document.getElementsByClassName("tdwind_degrees").innerHTML =
      data.wind_degrees;
    document.getElementsByClassName("tdSunrise").innerHTML = data.sunrise;
    document.getElementsByClassName("tdSunset").innerHTML = data.sunset;
    document.getElementsByClassName("tdCloud_pct").innerHTML = data.cloud_pct;
  } catch (error) {
    console.error(error);
  }
}

function dropdowncity1(navCity) {
  fetchWeather(navCity);
}
fetchWeather("Delhi"); // Call the async function
// Call the fetchWeatherForOtherCity function for other cities
fetchWeatherForOtherCity("Lucknow");
fetchWeatherForOtherCity("Shanghai");
fetchWeatherForOtherCity("Mumbai");
fetchWeatherForOtherCity("Kerala");
fetchWeatherForOtherCity("Ladakh");
