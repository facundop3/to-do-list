import React from 'react'
import './button.css'

const Button= props => (
  <button
    className="Button"
    onClick={console.log(props)}
  >
    {props.children}
  </button>
)

export default Button