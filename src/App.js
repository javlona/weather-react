import React from 'react';
import './App.css';
import Form from './components/Form';
import WeatherContext from './Context/Context.Weather';

function App() {
  return (
    <WeatherContext>
      <Form />
    </WeatherContext>
  );
}

export default App;
