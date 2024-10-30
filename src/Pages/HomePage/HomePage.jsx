import React from 'react'
import "./HomePage.css"
import CurrentWeather from '../../Components/CurrentWeather/CurrentWeather'
import CurrentHourly from '../../Components/CurrentHourly/CurrentHourly'
import CurrentDaily from '../../Components/CurrentDaily/CurrentDaily'


const HomePage = () => {
  return (
    <div className='current_weather_main'>
        <div className="cuurent_weather_daily">
            <CurrentWeather/>
            <CurrentHourly/>
        </div>
        <div className="days">
            <CurrentDaily/>
        </div>
    </div>
  )
}

export default HomePage