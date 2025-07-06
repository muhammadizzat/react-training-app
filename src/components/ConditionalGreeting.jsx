import React from 'react'

function ConditionalGreeting({ name, isLoggedIn}) {
  return (
    <div>
        { isLoggedIn ? <p>Welcome back, {name}!</p> : <p>Please log in.</p> }
    </div>
  );
}

export default ConditionalGreeting