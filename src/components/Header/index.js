import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from '../../actions';
// import Box from '@mui/material/Box';
/* import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'; */
// styles

import MaterialUISwitch from './MaterialUISwitch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./header.scss"

function Header() {
  // const [value, setValue] = React.useState(0);
  const isDarkMode = useSelector((state) => state.settings.darkMode);

  const dispatch = useDispatch();
  function handleDarkModeClick() {
    console.log('color theme fired');
    dispatch(darkMode());
  }

  return (
    <div className={isDarkMode ? 'header ' : 'header light'}>

      <FormGroup className="header__themeSwitch">
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          onClick={() => {
            handleDarkModeClick();
          }}
        />
      </FormGroup>
      
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
