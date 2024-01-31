import React, { useState } from 'react'
import PriceCard from '../PriceCard/PriceCard'
import './prices.css'

const services = [
  {
    name: 'DESARROLLO WEB',
    color: '#75BFB2',
    services: [ 'Servicio 1', 'Servicio 2' ],
    prices: [
      { code: 'USD', price: 99 },
      { code: 'ARS', price: 35000 }
    ]
  },
  {
    name: 'MARKETING',
    color: '#F29422',
    services: [ 'Servicio 1', 'Servicio 2' ],
    prices: [
      { code: 'USD', price: 199 },
      { code: 'ARS', price: 71600 }
    ]
  },
  {
    name: 'BRANDING',
    color: '#BF4226',
    services: [ 'Servicio 1', 'Servicio 2', 'Servicio 3' ],
    prices: [
      { code: 'USD', price: 299 },
      { code: 'ARS', price: 107640 }
    ]
  }
]

function Prices() {
  const [ coinSelected, setCoinSelected ] = useState('USD');
  const [ USDBluePrice, setUSDBluePrice ] = useState(0);
  const [ isShown, setIsShown ] = useState(false);

  const selectClickHandler = () => setIsShown(true)
  const selectLeaveHandler = () => setIsShown(false)

  function selectCoinHadler(coin) {
    setCoinSelected(coin)
    setIsShown(false)

    if (coin === 'ARS') {
      const URL = 'https://api.bluelytics.com.ar/v2/latest'
      fetch(URL).then(response => response.json()).then(data => setUSDBluePrice(data.blue.value_avg))
    }
  }

  return (
    <div className='prices' id='prices'>
      <h1>Tarifario</h1>
      <div className='prices__subtitle'>
        <div className='prices__subtitle--select'>
          <p>Selecciona tu moneda</p>
          <>
            <div className='select' onPointerEnter={selectClickHandler} style={{ 'border': isShown && '1px solid #F29422' }}>
              <div>{coinSelected}</div>
              <div className='select__icon'><img src="select.png" alt="" /></div>
            </div>
            {
              isShown && 
                <div className='options' onPointerLeave={selectLeaveHandler}>
                  <div className='optionsContainer'>
                    <div className='option' onClick={() => selectCoinHadler('ARS')}>
                      <p>Peso Argentino</p>
                      <img src="coin-ars.png" alt="" />
                    </div>
                    <div className='option' onClick={() => selectCoinHadler('USD')}>
                      <p>Dólares</p>
                      <img src="coin-usd.png" alt="" />
                    </div>
                  </div>
                </div>
              }
          </>
        </div>
        <p>Estamos comprometidos con el despegue de tu negocio ¡Somos tu mejor opción!</p>
      </div>
      <div className='prices__cards'>
        { services.map(service => <PriceCard key={service.name} title={service.name} price={coinSelected === 'USD' ? service.prices[0].price : (service.prices[0].price * USDBluePrice)} color={service.color} services={service.services} />) }
      </div>
    </div>
  )
}

export default Prices