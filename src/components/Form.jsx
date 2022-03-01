import React,{ useState, useContext } from 'react'
import { Weather } from '../Context/Context.Weather'


function Form() {
    const { location, setLocation, submitHandler } = useContext ( Weather )

    console.log(location)
    
    return (
    <form onSubmit={submitHandler}>
        <input 
            className="form__input"
            type="text"
            placeholder="Enter location"
            defaultValue={ location }
            onChange={ (e) => setLocation( e.target.value )}
        />
    </form>
  )
}

export default Form