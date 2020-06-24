import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const NavBar = () => {
  const { location } = useContext(WeatherContext).data;
  return (
    <nav>
      <h1>My Weather App</h1>
      {location ? (
        <>
          <h2>
            {location.name} {location.region}
          </h2>
          <h6>Last loaded at: {location.localtime}</h6>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
