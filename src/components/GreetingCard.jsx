import React from 'react'

const GreetingCard = (props) => {
  return (

    <div style={{ border: '1px solid gray', padding: '1rem', borderRadius: '10px' }}>
        <h2>Hello, {props.name}!</h2>
        <p>Welcome to React</p>
    </div>
  )
}

export default GreetingCard