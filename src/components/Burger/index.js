// classnames est une lib permettant de générer pour nous des noms de classe à appliquer
import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';


import { toggleOpen } from '../../actions';

// styles
//import './burger.scss';

function Burger() {
  const isToggleOpen = useSelector((state)=> state.settings.isToggleOpen);

  // ici, on veut :
  // - toujours la classe settings
  // -  la classe settings--closed seulement si isOpen vaut faux
  const className = classnames('toggle', { 'toggle--closed': !isToggleOpen });

  // - étape 4 - obtenir la méthode dispatch du store grâce à useDispatch
  const dispatch = useDispatch();

  // étape 2 - réagir dans un handler
  function handleToggleClick() {
    // - étape 5 - dispatcher l'action vers le store
    //dispatch(toggleOpen());
  }

  /* function handleSubmit(event) {
    event.preventDefault();
    dispatch(login());
  } */

  return (
    <div className={className}>
      {
        // étape 1 : écoute de l'évènement, on définit le handler qui va gérer
      }
      <button
        type="button"
        className="settings__toggle"
        onClick={handleToggleClick}
      >
        +
      </button>

            <a className="header__nav--link--mobile" href="./#skills" >Skills</a>
            <a className="header__nav--link--mobile" href="./#projects">Projets</a>
            <a className="header__nav--link--mobile" href="./#timeline">Parcours</a>
            <a className="header__nav--link--mobile" href="./#contact">Contact</a>
      
      <p>grzg<p>

      </p>dfgsgsg</p>
    </div>
  );
}

export default Burger;
