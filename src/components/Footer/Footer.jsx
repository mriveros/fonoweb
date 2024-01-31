import React from "react";
import Button from "../Button/Button";
import "./footer.css";

function Footer() {
  return (
      <div className="footer">
        <img src="cloud3.png" alt="" className="cloud3" />
        <footer>
            <div className="box__container">
                <div className="box1">
                    <img src="logo.png" alt="" />
                    <p>Somos una agencia digital de marketing, branding y desarrollo web tanto para emprendedores como para empresas.</p>
                    <div className="box1__input">
                        <input type="email" name="" id="" placeholder="Correo electrónico"/>
                        <Button text={'Suscribete'} width={'218px'}/>
                    </div>
                </div>

                <div className="box2">
                    <h3>Links</h3>
                    <p>Home</p>
                    <p>Sobre nosotros</p>
                    <p>Nuestros servicios</p>
                    <p>Proyectos</p>
                </div>

                <div className="box3">
                    <div className="box3__company">
                        <h3>Nuestra compañía</h3>
                        <p>Dirección</p>
                        <p>Buenos Aires, Argentina</p>
                    </div>
                    <div className="box3__follow">
                        <h3>Síguenos</h3>
                        <img src="instagram.png" alt="" />
                        <img src="linkedin.png" alt="" />
                        <img src="facebook.png" alt="" />
                    </div>
                </div>
            </div>
            <p>Copyright © 2023 CODERHOUSE. Todos los derechos reservados</p>
        </footer>
    </div>
  );
}

export default Footer;
