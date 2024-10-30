import React from 'react'
import "./CurrentWeather.css"
import { useSelector } from 'react-redux';
import { kelvinToCelsius,kelvinToFahrenheit } from '../../Utils/WeatherUtils';

const CurrentWeather = ({weather}) => {
    const {currentWeather,loadingStatus,allData,celsFahr} = useSelector((state)=>state.currentWeatherData)

  return (
    <div className='current_weather'>
        
            {
                loadingStatus === "pendind" ? <div>Loading......</div> : loadingStatus === "fulfilled"  ? (
                    <div className="weather">
                        <div className="city">{allData.city.name}</div>
                        <div className="celsius">{celsFahr ? kelvinToCelsius(currentWeather.main.temp_max) : kelvinToFahrenheit(currentWeather.main.temp_max)}&deg; C</div>
                        <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} alt="" />
                        <div className="main_current">{currentWeather.weather[0].main}</div>
                    </div>
                ): <div>Rejected</div>
            }
            
           
     
    </div>
  )
}

export default CurrentWeather
