import React from 'react'
import SubheaderCard from '../SubheaderCard/SubheaderCard'
import './subheader.css'

function Subheader() {
  return (
    <div className='subheader'>
      <SubheaderCard title={'Desarrollo Web'} />
      <SubheaderCard title={'Branding'} />
      <SubheaderCard title={'Redes sociales'} />
    </div>
  )
}

export default Subheader