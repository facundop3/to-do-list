import React from 'react'
import './button.css'

const Button= props => (
  <button
    className="Button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default Button