import React from 'react'

function Button({name}) {
  return (
    <div> <button onClick={() => alert ("welcome " + name)} >push</button>

    </div>
  )
}

export default Button