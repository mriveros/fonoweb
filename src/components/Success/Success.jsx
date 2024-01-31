import React from 'react'
import Button from '../Button/Button'
import './success.css'

function Success() {
  return (
    <div className='success'>
      <h1>¡Gracias por ponerte en contacto!</h1>
      <p>Muy pronto te contactaremos para platicar sobre tu proyecto...</p>
      <Button text={'Finalizar'} width={'186px'}/>
      <img src="loadinglinestop.png" alt="" className='successline1'/>
      <img src="loadinglinesbottom.png" alt="" className='successline2'/>
    </div>
  )
}

export default Success