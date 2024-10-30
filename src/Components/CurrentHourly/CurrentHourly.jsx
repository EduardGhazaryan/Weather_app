import React from 'react'
import "./CurrentHourly.css"
import { useSelector } from 'react-redux'
import { kelvinToCelsius,kelvinToFahrenheit } from '../../Utils/WeatherUtils'

const CurrentHourly = () => {
    const {hourlyWeather,celsFahr} = useSelector((state)=>state.currentWeatherData)

  return (
    <div className='current_hourly_main'> 
      {
        hourlyWeather.length > 0 ?  hourlyWeather.map((el,i)=> (
            <div key={i} className='hourly_item'>
              <p>{el.dt_txt.split(" ")[1]}</p>
              <div className="celsius">{celsFahr ? kelvinToCelsius(el.main.temp_max) : kelvinToFahrenheit(el.main.temp_max)}&deg; C</div>
              <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" />
            </div>
        )) : ""
      }
    </div>
  )
}

export default CurrentHourly