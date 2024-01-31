import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import './about.css'

function About() {
  return (
    <div className='about'>
      <h3 className='about__title'>Potenciamos tu negocio para que pueda despegar</h3>
      <div className='about__subtitle'>
        <h2>¿Por qué somos la solución perfecta para tu negocio?</h2>
        <p>Nuestro equipo empatiza con tu necesidad directa y crea el ambiente perfecto para que el resultado final de nuestro trabajo refleje la esencia de tu empresa.</p>
      </div>
      <div className='about__cards'>
        <AboutCard 
          title={'Misión'} 
          image={'mision.png'} 
          backgroundColor={'#75BFB2'} 
          text={'En TerapiaAuditiva.com, nos comprometemos a ofrecer servicios de terapia fonoaudiológica que promuevan la salud auditiva y el desarrollo integral de nuestros clientes. Nos esforzamos por proporcionar soluciones personalizadas y de alta calidad, utilizando enfoques basados en la evidencia y la empatía. Nuestra misión es facilitar el camino hacia una comunicación efectiva, ayudando a las personas a alcanzar su máximo potencial auditivo y lingüístico.'} 
        />
        <AboutCard 
          title={'Visión'} 
          image={'vision.png'} 
          backgroundColor={'#252526'} 
          text={'Nos vemos como un referente de excelencia en terapia fonoaudiológica en línea, destacando por nuestra dedicación a la innovación, la educación continua y la mejora constante. Aspiramos a ser líderes en el sector, brindando servicios accesibles que contribuyan al bienestar auditivo y comunicativo de individuos de todas las edades. Nuestra visión es crear un espacio en línea donde la terapia fonoaudiológica sea eficaz, inclusiva y transformadora, impactando positivamente en la calidad de vida de quienes confían en nuestros servicios.'} 
        />
      </div>
    </div>
  )
}

export default About