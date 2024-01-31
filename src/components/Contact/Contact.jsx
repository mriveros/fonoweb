import React from 'react'
import Button from '../Button/Button'
import ContactCard from '../ContactCard/ContactCard'
import './contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact__container'>
        <div className='contact__container--image'>
          <img src="contact.png" alt="" />
        </div>
        <div className='contact__container--form'>
          <h3>formulario de contacto</h3>
          <h2>Contáctanos</h2>
          <p>Escribe tus datos de contacto y platícanos sobre tu idea o proyecto y enseguida un integrante de Boost se pondrá en contacto contigo.</p>
          <form action="">
            <input type="text" name="" id="" placeholder='Nombre'/>
            <input type="text" name="" id="" placeholder='Teléfono' />
            <input type="text" name="" id="" placeholder='Correo electrónico' />
            <input type="text" name="" id="" placeholder='Motivo de consulta' />
            <textarea rows="5" cols="60" name="text" placeholder="Tu mensaje"></textarea>
            <Button text={'Enviar'} width={'176px'} />
          </form>
        </div>
      </div>
      <h3>Estamos en contacto</h3>
      <h2>Contáctanos y te cotizamos sin compromiso</h2>
      <p>Diseñamos proyectos integrales adaptados a tus necesidades, siempre con el objetivo de hacer crecer tu proyecto.</p>
      <div className='contactcards__container'>
        <ContactCard title={'¿Dónde estamos?'} data={'Asuncion, Mariscal Lopez esq. Dr Morra'} icon={'location.png'} backgroundColor={'transparent'} color={'black'} />
        <ContactCard title={'Nuestro correo'} data={'lulibenitez2015@gmail.com'} icon={'email.png'} backgroundColor={'#B2B2B2'} color={'#FFFFFF'} titleColor={'#FFFFFF'} dataColor={'#FFFFFF'} />
        <ContactCard title={'Teléfono'} data={'(+5959) 75704240'} icon={'phone.png'} backgroundColor={'transparent'} color={'black'} />
      </div>
    </div>
  )
}

export default Contact