import React, { createContext, useState, useEffect } from "react";
import fetchWeather from "../config";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  async function fetchData() {
    const response = await fetchWeather();
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ data }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
