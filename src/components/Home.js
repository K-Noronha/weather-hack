import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

const Home = () => {
  const { data } = useContext(WeatherContext);
  return (
    <section className="Home">
      <h1>Current Weather</h1>
      {data.name ? (
        <>
          <h2>{data.name}</h2>
          <WeatherCard details={data.main} weather={data.weather[0]} />
        </>
      ) : null}
    </section>
  );
};

export default Home;
