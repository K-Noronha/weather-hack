import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const NavBar = () => {
  const { data } = useContext(WeatherContext);
  return (
    <nav>
      <h1>My Weather App</h1>
      {data.location ? (
        <>
          <h2>
            {data.location.name} {data.location.region}
          </h2>
          <h6>Last loaded at: {data.location.localtime}</h6>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
