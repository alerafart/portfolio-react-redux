import React from "react";
import { useSelector } from 'react-redux';
import linkedin from './linkedin.png';
import github from './github.png';
// import HomeIcon from '@mui/icons-material/Home';
import ForwardIcon from '@mui/icons-material/Forward';
// styles
import "./footer.scss"

function Footer() {

const isDarkMode = useSelector((state) => state.settings.darkMode);


  return (

    <div className={isDarkMode ? 'footer' : 'footer light'}>

      <p>Mentions légales</p>
      <p className="footer--p">Développé par <strong>Alejandra Rafart</strong></p>
        <a href="https://github.com/alerafart" className="footer--link"><img className="footer--img" src={github} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/rafart-alejandra/" className="footer--link"><img className="footer--img" src={linkedin} alt="github icon" /></a>
      
      <p className="footer--small">Copyright All Right Reserved 2022 <strong>Alejandra Rafart</strong>
      </p>
      <a className="home" href="./#root" >
        <ForwardIcon className="home--icon"
        sx={{ color:'#aeea00', fontSize: 50 }} />
      </a>
    </div>
  );
}

export default Footer;
