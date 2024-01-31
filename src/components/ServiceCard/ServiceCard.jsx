import React from 'react'
import './servicecard.css'

function ServiceCard({ image, title, subtitle, description, items, layout }) {
  return (
    <div className='servicecard' style={{flexDirection: layout === 'right' && 'row-reverse'}}>
        <div className='servicecard__image'>
            <img src={image} alt="" />
        </div>

        <div className='servicecard__description'>
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <ul className='servicecard__description--list'>
                { items.map(item => <li key={item}>/ {item}</li>) }
            </ul>
        </div>
    </div>
  )
}

export default ServiceCard