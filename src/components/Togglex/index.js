// == Import : npm
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen } from '../../actions';
// == Import : local
import './toggle.scss';

// == Composant
function Toggle() {
  const isToggleOpen = useSelector((state)=> state.settings.isToggleOpen);
  const dispatch = useDispatch();
  // On calcul la classe CSS a appliquer selon la valeur de notre state
  

  function manageClick() {
    //let cssClass = 'toggle';
      let cssClass;
    console.log('click toggle');
    dispatch(toggleOpen());
    if (isToggleOpen) {
      cssClass = 'toggle toggle--open';
    }
    else {
      cssClass = 'toggle';
    }
  }
  
  
  /* let cssClass;
  if (open) {
    cssClass = 'toggle toggle--open';
  }
  else {
    cssClass = 'toggle';
  } */

  // On recoit en prop le handler du click
  // On peut donc l'executer d'ici afin de modifier la valeur de isOpen
  // Le code de cette modification est définit dans le composant racine (Converter)
  return (
    <button
      //className={cssClass}
      className={toggleOpen ? 'toggle' : 'toggle toggle--open'}
      type="button"
      onClick={manageClick}
    >
      =
    </button>
  );
}

// == Export
export default Toggle;
