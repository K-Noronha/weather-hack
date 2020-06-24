import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { ThemeContext } from "../context/ThemeContext";
import WeatherCard from "./WeatherCard";

const Home = () => {
  const { data, refreshWeather } = useContext(WeatherContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="home">
      <h1>Current Weather For</h1>
      {data.name ? (
        <>
          <h2 className="home__name">{data.name}</h2>
          <WeatherCard
            details={data.main}
            weather={data.weather[0]}
            theme={theme ? null : "darktheme"}
          />
        </>
      ) : null}
      <div className="btnContainer">
        <button onClick={toggleTheme}>Click Me!</button>
        <button onClick={refreshWeather}>Refresh</button>
      </div>
    </section>
  );
};

export default Home;
