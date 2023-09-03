import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import ImageList from "./components/ImageList";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const [weather, setWeather] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    getWeatherResponses().catch((error) => {
      console.log("Error fetching and weather", error);
    });
    getCurrentWeatherResponses().catch((error) => {
      console.log("Error fetching current weather", error);
    });
  }, []);

  const getGeoLocation = () => {
    // Check if geolocation is available in the user's browser
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Get the latitude and longitude from the geolocation response
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            resolve({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            reject(error);
          },
        );
      } else {
        console.error("Geolocation is not available in this browser.");
        reject("Geolocation is not available in this browser.");
      }
    });
  };

  const getQueryString = (coordinates) => {
    const queryParams = {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    };
    return new URLSearchParams(queryParams).toString();
  };

  const getWeatherResponses = async () => {
    try {
      const coordinates = await getGeoLocation();
      const queryString = getQueryString(coordinates);
      const response = await axios.get(
        `${process.env.REACT_APP_FRONT_URL}/api/weather?${queryString}`,
      );
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather response.", error);
      throw error;
    }
  };

  const getCurrentWeatherResponses = async () => {
    try {
      const coordinates = await getGeoLocation();
      const queryString = getQueryString(coordinates);
      const response = await axios.get(
        `${process.env.REACT_APP_FRONT_URL}/api/weather/current?${queryString}`,
      );
      setCurrentWeather(response.data);
    } catch (error) {
      console.log("Error fetching current weather.", error);
      throw error;
    }
  };

  return (
    <div>
      <CurrentWeather weathertoday={currentWeather} />
      <ImageList weatherforecast={weather} />
      <div>
        {latitude ? (
          <div>
            Latitude: {latitude}, Longitude: {longitude}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
