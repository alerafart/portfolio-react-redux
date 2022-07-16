import React from "react";
import { useSelector } from 'react-redux';
import linkedin from './linkedin.png';
import github from './github.png';
// styles
import "./footer.scss"

function Footer() {

  //const isDarkMode = useSelector((state) => state.settings.darkMode);
  return (
    <div className="footer">
   {/*  <div className={isDarkMode ? 'footer' : 'footer light'}></div> */}
      Footer component
      <p>Mentions légales</p>
      <p className="footer--p">Développé par <strong>Alejandra Rafart</strong>
        <a href="https://github.com/alerafart" className="footer--p"><img className="footer--img" src={github} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/rafart-alejandra/" className="footer--p"><img className="footer--img" src={linkedin} alt="github icon" /></a>
      </p>
      <p className="footer--small">* lorem 20 
      </p>
    </div>
  );
}

export default Footer;
