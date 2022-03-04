import React, { createContext, useState, useEffect } from "react";
import Client from "../Utils/axios"

const Weather = createContext();

function WeatherContext(props) {

    const [location, setLocation] = useState("")
    const [weatherData, setWeatherData] = useState({})

    const API_KEY = '16972912cbf2306332faf364445f5021'
    const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${location}`
    

    const submitHandler = async(e) => {
        e.preventDefault();
        
        try {
            //const { data } = await Client.get('/search', {params: {query: location}})
            const res = await fetch(URL);
            const data = await res.json();
            setWeatherData(data) 
        
        } catch(error){
            console.log(error)
        }
    }

    const getTemp = (temp) => Math.floor(temp-273.15)

    return (
        <Weather.Provider
            value={
               { location,
                setLocation, 
                submitHandler,
                weatherData,
                getTemp}
            }
        >
            { props.children }
        </Weather.Provider>
    ) 
}

export { Weather };
export default WeatherContext;