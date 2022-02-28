import React,{useState} from 'react'

function Form() {
   

    return (
    <form onSubmit={submitHandler}>
        <input 
            className="form__input"
            type="text"
            placeholder="Enter location"
            value={ value }
            onChange={ changeHandler }
        />
    </form>
  )
}

export default Form