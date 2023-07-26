// Here I declare my API call, along with a catch incase of any errors with retrieving data.
let weather = {
    apiKey: "6117c1e3ad21ed0cc5fb99e896427823",
    fetchWeather: function(city) {
       fetch("https://api.openweathermap.org/data/2.5/weather?q="
       + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(e => alert("No location found, please check your spelling and try again."));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity;
        document.querySelector(".wind").innerText = 
        "Wind Speed: " + speed + " km/h";

    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
// Here I declare a function to allow the user to hit the enter key to search. 
document.querySelector(".search-bar")
.addEventListener("keyup", function(event) {
    if (event.key === "Enter"){
      weather.search();
    }
});
// Here I declare a function to make the search button interactive.
document.querySelector(".search button").addEventListener("click", function() {
        weather.search();
});
// Here I declare a function to reset the form when the user clicks the reset button. 
document.querySelector("#reset").addEventListener("click", function() {
    let city = document.querySelector(".city");
    city.innerHTML = "";

    let temp = document.querySelector(".temp");
    temp.innerHTML = "";

    let icon = document.querySelector(".icon");
    icon.src = "";

    let description = document.querySelector(".description");
    description.innerHTML = "";

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = "";

    let wind = document.querySelector(".wind");
    wind.innerHTML = "";
});
// Here I declare a function to reset the value of the search bar. 
function clearInput() {
    let getValue = document.querySelector(".search-bar");
    if (getValue.value !== ""){
        getValue.value = "";
    }
}



