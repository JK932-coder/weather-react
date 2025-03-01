import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState(city);

  useEffect(() => {
    let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then((response) => {
      setWeatherData(response.data);
    });
  }, [searchCity]);

  function handleSearch(event) {
    event.preventDefault();
    const cityInput = event.target.elements.cityInput.value;
    setSearchCity(cityInput);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-app">
      <header>
        <form className="search-form" id="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-form-input"
            className="search-form-input"
            name="cityInput"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <h1 className="weather-app-city" id="city">
          {weatherData.name}
        </h1>
        <div className="weather-app-data">
          <div>
            <p className="weather-app-details">
              <span id="time">{new Date().toLocaleTimeString()}</span>,{" "}
              <span id="description">{weatherData.weather[0].description}</span>
              <br />
              Humidity:{" "}
              <strong id="humidity">{weatherData.main.humidity}%</strong>, Wind:{" "}
              <strong id="wind-speed">{weatherData.wind.speed} km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
            </div>
            <div className="weather-app-temperature" id="temperature">
              {Math.round(weatherData.main.temp)}
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>
      <footer>
        This project was coded by
        <a
          href="https://github.com/JK932-coder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jekaterina Valeviciene
        </a>
        , is open-sourced on
        <a
          href="https://github.com/JK932-coder/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        and
        <a
          href="https://jkweatherapp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
