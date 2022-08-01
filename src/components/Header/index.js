import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkMode , toggleOpen } from '../../actions';

// styles
import AppBar from '@mui/material/AppBar';
import MaterialUISwitch from './MaterialUISwitch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import "./header.scss"

function Header() {
  //const isDarkMode = useSelector((state) => state.settings.darkMode);

  const dispatch = useDispatch();
  function handleDarkModeClick() {
    console.log('color theme fired');
    dispatch(darkMode());
  }

  const isToggleOpen = useSelector((state)=> state.settings.toggleOpen);
  function handleToggle() {
    console.log('click toggle');
    dispatch(toggleOpen());
    
  }
  return (
    <div >
      <AppBar enableColorOnDark //position="fixed" 
      id="header" className={isToggleOpen ? 'header' : 'header--open'} //className = {isDarkMode ? 'header' : 'header light'} {...isToggleOpen ? '' : 'hide'}
      sx={{
            //backgroundColor: 'primary.main',
            //'&:hover': {
              //backgroundColor: 'primary.dark',
            //},
          }} 
      >
        <nav className="header__nav">
          <div className="header__nav--buttons">
              <FormGroup className="header__themeSwitch">
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 0.5 }} defaultChecked />}
                  onClick={() => {
                    handleDarkModeClick();
                  }}
                />
              </FormGroup>
              <button                  
                className={isToggleOpen ? 'toggle toggle--open' : 'toggle'}
                type="button"
                onClick={handleToggle}
              >
                +
              </button>
          </div>
        
            <a className="header__nav--link" href="./#skills" >Skills</a>
            <a className="header__nav--link" href="./#projects">Projets</a>
            <a className="header__nav--link" href="./#timeline">Parcours</a>
            <a className="header__nav--link" href="./#contact">Contact</a>
          
            <a className='header__nav--link--mobile' href="./#skills" >Skills</a>
            <a className='header__nav--link--mobile'  href="./#projects">Projets</a>
            <a className='header__nav--link--mobile'  href="./#timeline">Parcours</a>
            <a className='header__nav--link--mobile'  href="./#contact">Contact</a>
        </nav>
      </AppBar>
    </div>

    
  );
}

export default Header;