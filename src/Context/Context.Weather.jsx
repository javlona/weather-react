import React, { createContext, useState, useEffect } from "react";
import Client from "../Utils/axios"

const Weather = createContext();

function WeatherContext(props) {

    const [location, setLocation] = useState("")
    

    const submitHandler = async(e) => {
        e.preventDefault();
        
        try {
            //const { data } = await Client.get('/search', {params: {query: location}})
            
            const res = await Client.get({params: location})

            console.log('weather', res);
        } catch(error){
            console.log(error)
        }
    }

    return (
        <Weather.Provider
            value={
               { location,
                setLocation, 
                submitHandler}
            }
        >
            { props.children }
        </Weather.Provider>
    ) 
}

export { Weather };
export default WeatherContext;