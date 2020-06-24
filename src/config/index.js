import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";

export default async function fetchWeather(city) {
  try {
    const response = await axios.get(url, {
      params: {
        appid: process.env.REACT_APP_API_SPACE,
        q: "toronto",
      },
    });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
