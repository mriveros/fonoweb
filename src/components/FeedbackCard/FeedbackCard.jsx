import React from 'react'
import './feedbackcard.css'

function FeedbackCard({ text, author, location, image }) {
  return (
    <div className='feedbackcard'>
      <img src="quote.png" alt="" />
      <p>{text}</p>
      <div className='feedbackcard__author'>
        <div className='feedbackcard__author--image'><img src={image} alt="Imagen del autor" /></div>
        <div className='feedbackcard__author--text'>
          <h4>{author}</h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard