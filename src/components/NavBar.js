import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const NavBar = () => {
  const { data } = useContext(WeatherContext);
  console.log("data", data);
  return (
    <nav>
      <h1>My Weather App</h1>
      {data.name ? (
        <>
          <h2>{data.name}</h2>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
