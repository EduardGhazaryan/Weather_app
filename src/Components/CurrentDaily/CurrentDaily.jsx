import React, {useState } from 'react'
import "./CurrentDaily.css"
import { useDispatch, useSelector } from 'react-redux';
import { kelvinToCelsius,kelvinToFahrenheit } from '../../Utils/WeatherUtils';
import { setCurrentWeather, setHourlyweather } from '../../Redux/Slices/CurrentWeather/CurrentWeatherSlice';

const CurrentDaily = () => {
    const {dailyWeather,celsFahr} = useSelector((state)=>state.currentWeatherData)
    const [selectedDay, setSelectedDay] = useState(null)

    const dispatch = useDispatch()

    function changeSelectedDay(day){
        dispatch(setHourlyweather(day.dt_txt.split(" ")[0]))
        dispatch(setCurrentWeather(day))
        setSelectedDay(day.dt_txt)
    }


  return (
    <div className='daily_main'>
        {
            dailyWeather.length > 0 ? dailyWeather.map((el,i)=>{
                !selectedDay && i === 0 && setSelectedDay(el.dt_txt)
                return (
                    <div key={i} className={`daily_item ${el.dt_txt === selectedDay ? "daily_item_selected" : ""}` } onClick={()=>changeSelectedDay(el)}>
                        <div className="daily_date">{el.formattedDate}</div>
                        <div className="daily_weather">
                            <span>{celsFahr ? kelvinToCelsius(el.main.temp_max) : kelvinToFahrenheit(el.main.temp_max)}&deg; C</span>
                            <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" />
                        </div>
                    
                    </div>
                )
                
}):""
        }
    </div>
  )
}

export default CurrentDaily