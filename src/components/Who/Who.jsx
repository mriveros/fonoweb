import React from 'react'
import './who.css'

function Who() {
  return (
    <div className='who' id='who'>
        <div className='who__box'>
            <h3 className='who__title'>¿Quiénes somos?</h3>
            <h2 className='who__subtitle'>Somos una agencia digital creativa en el mundo online</h2>
            <p className='who__text'>Emprendedores, pymes y grandes negocios, en Boost tenemos la asesoría específica para cada uno de ellos. ¡Te acompañamos en cada paso hacia el futuro de tu marca!</p>
            <div className='who__images'>
              <img src="who1.png" alt="" />
              <img src="who2.png" alt="" />
            </div>
        </div>
        <h4>Desarrollo web</h4>
        <h4>Branding</h4>
        <h4>Redes sociales</h4>
    </div>
  )
}

export default Who