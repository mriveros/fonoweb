import React from "react";
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="images">
        <img src="./cloud2.png" alt="" className="cloud2" />
        <img src="./cloud1.png" alt="" className="cloud1" />
        <img src="./rocket.png" alt="" className="rocket" />
        <img src="./moon.png" alt="" className="moon" />
        <img src="./circle.png" alt="" className="circle" style={{ left: '90px', top: '55px', width: '7px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '5%', top: '107px', width: '2px', height: '3px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '69px', top: '151px', width: '4px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '331px', top: '77px', width: '11.83px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '10.3%', top: '239px', width: '11.83px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '47.5%', top: '60px', width: '5px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '44.8%', top: '187px', width: '4px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '50.6%', top: '439px', width: '11.83px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '75%', top: '100px', width: '7px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '83%', top: '50px', width: '11.83px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '91%', top: '120px', width: '3px' }} />
        <img src="./circle.png" alt="" className="circle" style={{ left: '89%', top: '290px', width: '7px' }} />
      </div>
      
      <div className="text__container">
        <div className="p1">
          Recupera sonrisas, redefine palabras, transforma vidas.
        </div>
        <div className="p2">
          <img src="./Somos.png" alt="" />
          <img src="./logo.png" alt="" />
        </div>
        <div className="p3">
          <p>
          "Trabajamos con familias y educadores para construir un camino divertido y efectivo hacia el desarrollo del lenguaje y la comunicación, brindando a los niños las herramientas que necesitan para expresarse con confianza y alegría."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
