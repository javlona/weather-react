import React, { createContext, useState, useEffect } from "react";

const Weather = createContext();

function WeatherContext(props) {

    const [location, setLocation] = useState()

    const changeHandler = (e) => {
        const {value} = e.target

    } 

    const submitHandler = (e) => {
        e.preventDefault();
        
    }


    return (
        <Weather.Provider
            value={
                location
            }
        >
            { props.children }
        </Weather.Provider>
    ) 
}

export { Weather };
export default WeatherContext;