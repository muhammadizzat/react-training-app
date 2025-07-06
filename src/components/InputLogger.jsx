import React, { useState } from 'react'

const InputLogger = () => {
    const [text, setText] = useState('');

    function handleChange(event){
        setText(event.target.value);
        console.log("Current input:", event.target.value)
    }

  return (
    <input type="text" value={ text } onChange={handleChange} placeholder='Type here...' />
  )
}

export default InputLogger