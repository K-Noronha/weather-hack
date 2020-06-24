import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

const Home = () => {
  const { data } = useContext(WeatherContext);
  return (
    <section className="home">
      <h1>Current Weather For</h1>
      {data.name ? (
        <>
          <h2 className="home__name">{data.name}</h2>
          <WeatherCard details={data.main} weather={data.weather[0]} />
        </>
      ) : null}
    </section>
  );
};

export default Home;
