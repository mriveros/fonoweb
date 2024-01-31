import React from "react";
import Button from "../Button/Button";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <picture className="navbar__logo">
          <img src="logo.png" alt="Logo de Boost" />
      </picture>
      
      <ul className="navbar__menu">
        <li className="navbar__menu--item active">Inicio</li>
        <li className="navbar__menu--item"><a href="#who">¿Quiénes somos?</a></li>
        <li className="navbar__menu--item"><a href="#services">Servicios</a></li>
        <li className="navbar__menu--item"><a href="#prices">Tarifario</a></li>
        <a href="#contact"><Button text={'Contactanos'} width={'190px'} /></a>
      </ul>
    </nav>
  );
}

export default NavBar;
