import React from "react";

// import Box from '@mui/material/Box';
/* import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'; */
// styles
import "./header.scss"

function Header() {
  // const [value, setValue] = React.useState(0);

  return (
    <div className="header">
      <nav className="header__nav">
        
          <a className="header__nav--link" href="./#skills" >Skills</a>
          <a className="header__nav--link" href="./#projects">Projets</a>
          <a className="header__nav--link" href="./#timeline">Parcours</a>
          <a className="header__nav--link" href="./#contact">Contact</a>
        
      </nav>

    
          


    </div>

    
  );
}

export default Header;
