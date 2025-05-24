import React, { useState, useContext, createContext } from 'react'
import { getWeatherDataForCity, getWeatherDataForLocation } from '../api';

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity)
    setdata(response);
  }

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
        .then((data) => setdata(data))
    }, (error) => {
      console.error('Error getting location:', error);
    })
  }

  return (
    <WeatherContext.Provider
      value={{
        searchCity, 
        data, 
        setSearchCity, 
        fetchData, 
        fetchCurrentUserLocationData  // <- Add this line
      }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default { WeatherContext }