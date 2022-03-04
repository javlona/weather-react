import React from 'react';
import './App.css';
import Form from './components/Form';
import WeatherResult from './components/WeatherResult';
import WeatherContext from './Context/Context.Weather';

function App() {
  return (
    <WeatherContext>
      <Form />
      <WeatherResult />
    </WeatherContext>
  );
}

export default App;
