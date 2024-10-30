import React, { useState } from 'react'
import "./Nav.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCuurentWeather } from '../../Redux/Slices/CurrentWeather/CurrentWeatherThunk'
import { setCelsFahr } from '../../Redux/Slices/CurrentWeather/CurrentWeatherSlice'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const [text,setText] = useState("")
    const {celsFahr} = useSelector((state)=> state.currentWeatherData)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    function findCity(){
        if(text.trim()){
            navigate("/")
            dispatch(getCuurentWeather({city:text}))
            setText("")
        }
    }

    function changeCelsFahr(a){
        dispatch(setCelsFahr(!celsFahr))
        
    }

  return (
    <div className='nav_main'>
        <div className="search_block">
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={findCity}>search</button>
        </div>
        <div className="fahr_cels">
                <div>
                    <input type="radio" name='cels_fahr' onChange={()=>changeCelsFahr()} id='cels' checked={celsFahr ?  true : false}/>
                    <label htmlFor="cels">C</label>
                </div>
                <div>
                    <input type="radio" name='cels_fahr' onChange={()=>changeCelsFahr()} id='fahr' checked={!celsFahr ? true : false }/>
                    <label htmlFor="fahr">F</label>
                </div>
        </div>
    </div>
  )
}

export default Nav



