const axios = require("axios");
require("dotenv").config();

const appId = process.env.APPID || "";
const mapURI =
  process.env.MAP_ENDPOINT || "https://api.openweathermap.org/data/2.5";

//Retrieves weather using the browser's location
const weather = async (latitude, longitude) => {
  try {
    const endpoint = `${mapURI}/forecast?lat=${latitude}&lon=${longitude}&APPID=${appId}`;
    const response = await axios.get(endpoint);
    return response.data ? response.data : {};
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data.");
  }
};

//Retrieves current weather using the browser's location
const currentWeather = async (latitude, longitude) => {
  try {
    const endpoint = `${mapURI}/weather?lat=${latitude}&lon=${longitude}&APPID=${appId}`;
    const response = await axios.get(endpoint);
    return response.data ? response.data : {};
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    throw new Error("Failed to fetch current weather data.");
  }
};

module.exports = {
  weather,
  currentWeather,
};
