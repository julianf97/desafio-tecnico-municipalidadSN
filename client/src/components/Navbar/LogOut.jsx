import { Fade as Hamburger } from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function LogOut({ handleLogoutClick, isVisible, setIsVisible }) {
  return (
    <div className="contenedorSalir">
      <span className="salir" onClick={handleLogoutClick}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </span>
      <Hamburger
        toggled={isVisible}
        toggle={() => setIsVisible(!isVisible)}
        className="hamburger-react"
        rounded
        color="#0194da"
      />
    </div>
  );
}