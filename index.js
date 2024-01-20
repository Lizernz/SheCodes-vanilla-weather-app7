function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    temperatureElement.innerHTML = Math.round(temperature); 
    console.log(response.data.temperature.current);
}






function searchCity(city) {
    // make API call and update the interface
    //separation of concerns
    let apiKey = "1de043300tfb174cf1a30ef403a9aobc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    //get results of the API
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    console.log(searchInput.value);
    
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris")