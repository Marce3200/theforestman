import React from "react";
import "./home.css";
import logo from "../img/logoforest.png";
import mail from "../img/contacto.png";
import insta from "../img/insta.png";
import der from "../img/chicaderecha.png";
import izq from "../img/chicaizquierda.png";


export const Home = () => {
  return (
    <div className="fondo">
      <div className="chicas">
        <img src={izq} alt="chica1"></img>
      </div>

      <div className="central">
        <img src={logo} alt="logo" className="logo"></img>

        <div className="redes">
         <a href ="https://www.instagram.com/theforestm/?hl=es-la" ><img src={insta} alt="insta"></img> </a> 
         <a href="mailto:contacto@theforestman.cl"> <img src={mail} alt="mail"></img></a>
        </div>
      </div>

      <div className="chicas">
      <img src={der} alt="chica2"></img>
      </div>
    </div>
  );
};
