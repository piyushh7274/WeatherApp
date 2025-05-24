import React from 'react'
import {useWeather} from "../context/Weather"

const Input = () => {
    const weather = useWeather()
    console.log("weather", weather)
  return (
    <div className="input">
        <input
        className="input-box"
         placeholder={"Enter city name"}
          value={weather.searchCity}
         onChange={(e)=> weather.setSearchCity(e.target.value) }
         />
    </div>
  )
}

export default Input 