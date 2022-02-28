import React, { createContext, useState, useEffect } from "react";

const Weather = createContext();

function WeatherContext(props) {

    const [location, setLocation] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        
    }

    const addLocation = () => {
        return setLocation({...location})
    }

    return (
        <Weather.Provider
            value={
                location,
                addLocation, 
                submitHandler
            }
        >
            { props.children }
        </Weather.Provider>
    ) 
}

export { Weather };
export default WeatherContext;