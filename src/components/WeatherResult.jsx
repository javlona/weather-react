import React, { useContext }from 'react';
import Container from './style'
import { Weather } from '../Context/Context.Weather'

function WeatherResult() {
    const {weatherData, getTemp} = useContext(Weather)
    console.log(weatherData)

  return (
    <Container>
        { 
            (weatherData.cod == '200') ?
            <div className="weather-body">
                <h2>{weatherData?.name}, {weatherData.sys?.country}</h2>
                <div className="weather-icon">
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                </div>
                <h3>{getTemp(weatherData?.main.temp)} &#8451;</h3>
                <h3>{weatherData?.weather[0].main}</h3>
            </div>
            :
            <h3>There is no such city</h3>
        }
        
    </Container>
  )
}

export default WeatherResult