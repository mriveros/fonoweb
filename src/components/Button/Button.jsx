import React from 'react'
import './button.css'

function Button({ text, width }) {
  return (
    <div className='button' style={{ width: width }}>{text}</div>
  )
}

export default Button