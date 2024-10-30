import { configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSlice from "./Slices/CurrentWeather/CurrentWeatherSlice";

export const store = configureStore({
    reducer: {
        currentWeatherData : CurrentWeatherSlice
    }
})