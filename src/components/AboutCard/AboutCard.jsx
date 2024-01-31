import React from 'react'
import './aboutcard.css'

function AboutCard({ backgroundColor, title, text, image }) {
  return (
    <div className='aboutcard' style={{backgroundColor: backgroundColor}}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default AboutCard