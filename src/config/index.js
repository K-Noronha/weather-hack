import axios from "axios";

const url = "http://api.weatherstack.com/current";

export default async function fetchWeather(city) {
  try {
    const response = await axios.get(url, {
      params: {
        access_key: process.env.REACT_APP_API_SPACE,
        query: "toronto",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
