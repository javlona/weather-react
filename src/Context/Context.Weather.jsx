import React, { createContext, useState, useEffect } from "react";

const Weather = createContext();

function WeatherContext(props) {

    const [location, setLocation] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        
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