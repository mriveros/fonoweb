import React from 'react'
import WorksCarrousel from '../WorksCarrousel/WorksCarrousel'
import './works.css'

function Works() {
  return (
    <div className='works'>
        <h2>Un poco de nuestros trabajos realizados...</h2>
        <div className='elipses__container'>
          <img src="elipse.png" alt="" />
          <img src="elipse.png" alt="" />
        </div>
        <WorksCarrousel />
        <div className='separator1'>
          <img src="separatorvector1.png" alt="" className='separatorvector1'/>
          <img src="separatororange1.png" alt="" className='separatororange1'/>
          <img src="separatoraqua1.png" alt="" className='separatoraqua1'/>
        </div>
    </div>
  )
}

export default Works