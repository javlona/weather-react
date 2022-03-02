import React,{ useState, useContext } from 'react'
import { Weather } from '../Context/Context.Weather'
import Container from './style'

function Form() {
    const { location, setLocation, submitHandler } = useContext ( Weather )
    
    return (
        <Container>
            <form onSubmit={submitHandler}>
                <input 
                    className="form__input"
                    type="text"
                    placeholder="Enter location"
                    defaultValue={ location }
                    onChange={ (e) => setLocation( e.target.value )}
                />
            </form>
        </Container>
  )
}

export default Form