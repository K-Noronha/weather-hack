import React from "react";

const WeatherCard = ({ details, weather }) => {
  const { temp, temp_min, temp_max, pressure, humidity } = details;
  const { main, description, icon } = weather;

  return (
    <div className="weatherCard">
      <div className="weatherCard__weather">
        <img
          className="weatherCard__weather--image"
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather Icon"
        />
        <h1>{main}</h1>
        <h3>{description}</h3>
      </div>
      <div>
        <h4>Temp: {temp}°C</h4>
        <h4>Min Temp: {temp_min}°C</h4>
        <h4>Max Temp: {temp_max}°C</h4>
        <h4>Pressure: {pressure}hPa</h4>
        <h4>Humidity: {humidity}%</h4>
      </div>
    </div>
  );
};

export default WeatherCard;
