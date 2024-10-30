import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Config/axios_config";

export const getCuurentWeather = createAsyncThunk(
    "getCuurentWeather",
    async function ({city},{ rejectWithValue }){
        try {
            const data = await instance.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bb00b16d42720ba6515121bdbf548c03`)
            return data.data
            
        } catch (error) {
            return rejectWithValue("An error occurred");
        }
    }
)
