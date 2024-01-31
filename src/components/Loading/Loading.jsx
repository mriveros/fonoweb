import React from 'react'
import './loading.css'

function Loading() {
  return (
    <>    
      <div className='loading'>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <div className='circle3'></div>
          <div className='circle4'></div>
          <div className='circle5'></div>
      </div>
      <div className='loadinglines'>
        <img src="loadinglinestop.png" alt="" className='loadingline1'/>
        <img src="loadinglinesbottom.png" alt="" className='loadingline2'/>
      </div>
    </>
  )
}

export default Loading