import React from 'react'
import './contactcard.css'

function ContactCard({ title, data, icon, backgroundColor, titleColor, dataColor }) {
  return (
    <div className='contactcard' style={{ color: 'white', backgroundColor: backgroundColor }}>
        <div className='contactcard__image'>
            <img src={icon} alt="" />
        </div>
        <div className='contactcard__text'>
            <h3 style={{ color: titleColor }}>{title}</h3>
            <p style={{ color: dataColor }}>{data}</p>
        </div>
    </div>
  )
}

export default ContactCard