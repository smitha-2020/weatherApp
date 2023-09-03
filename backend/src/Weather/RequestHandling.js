const debug = require("debug")("weathermap");
const weatherApi = require("./WeatherApi");
const handleCurrentWeatherRequest = async (ctx) => {
  const { latitude, longitude } = ctx.query;
  const weatherData = await weatherApi.currentWeather(latitude, longitude);
  debug(
    `Current Weather Api Triggered with ${latitude} latitude and ${longitude} longitude`,
  );
  ctx.type = "application/json; charset=utf-8";
  ctx.body = weatherData ? weatherData : {};
};

const handleWeatherRequest = async (ctx) => {
  const { latitude, longitude } = ctx.query;
  const weatherData = await weatherApi.weather(latitude, longitude);
  debug(
    `All Weather Api Triggered with ${latitude} latitude and ${longitude} longitude`,
  );
  ctx.type = "application/json; charset=utf-8";
  ctx.body = weatherData ? weatherData : {};
};

module.exports = {
  handleCurrentWeatherRequest,
  handleWeatherRequest,
};
