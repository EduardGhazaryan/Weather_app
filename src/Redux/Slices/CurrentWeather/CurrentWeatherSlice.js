import { createSlice } from "@reduxjs/toolkit";
import { getCuurentWeather, getDailyWeather } from "./CurrentWeatherThunk";


const initialState = {
    allData : {},
    currentWeather : [],
    dailyWeather : [],
    hourlyWeather : [],
    celsFahr:  true,
    loadingStatus : "pending"
}

const CurrentWeather = createSlice({
    name:"CurrentWeather",
    initialState,
    reducers : {
        setCelsFahr : (state,action)=>{
            state.celsFahr = action.payload
        },
        setHourlyweather: (state,{payload})=>{
            state.hourlyWeather = state.allData.list.filter(e => e.dt_txt.startsWith(payload));
        },
        setCurrentWeather : (state,{payload})=>{
            state.currentWeather = payload
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(getCuurentWeather.pending,(state,{payload})=>{
            state.loadingStatus = "pending"
        })
        .addCase(getCuurentWeather.fulfilled,(state,{payload})=>{
            const today = new Date().toISOString().split("T")[0]; 
            state.loadingStatus = "fulfilled"
            state.allData = payload
            state.currentWeather = payload.list[0];
            state.hourlyWeather = payload.list.filter(e => e.dt_txt.startsWith(today));
            const dailyDate =  payload.list.filter((_, index) => index % 8 === 0); 
            state.dailyWeather = dailyDate.map(el => {
                const date = new Date(el.dt_txt);
                const formattedDate = `${date.getMonth() + 1}-${date.getDate()}`; 
                return {
                    ...el,
                    formattedDate: formattedDate 
                };
            });
        })
        .addCase(getCuurentWeather.rejected,(state,{payload})=>{
            state.loadingStatus = "rejected"
        })
    }
})

export const {setCelsFahr,setCurrentWeather,setHourlyweather} = CurrentWeather.actions

export default CurrentWeather.reducer 