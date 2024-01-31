import React from 'react'
import FeedbackCarrousel from '../FeedbackCarrousel/FeedbackCarrousel'
import './feedback.css'

function Feedback() {
  return (
    <div className='feedback__container'>
      <div className='feedback__container--title'>
        <h2>EL MEJOR FEEDBACK</h2>
        <h1>Clientes felices</h1>
        <p>Algunos de los comentarios de clientes satisfechos con nuestro trabajo...</p>
      </div>
      <FeedbackCarrousel />
    </div>
  )
}

export default Feedback