import React, { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '1rem' }}>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Counter