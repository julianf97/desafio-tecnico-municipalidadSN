import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import EstarBien from '../../pages/EstarBien/EstarBien';
import FestivalRico from '../../pages/FestivalRico/FestivalRico';
import Expoagro from '../../pages/ExpoAgro/ExpoAgro';
import snSintesis from "../../assets/sn-sintesis.png";
import { EstarBienNav, ExpoagroNav, FestivalRicoNav } from '../../constants/NavbarConstants';
import "./_navbar.scss";

export default function MobileNav({ handleLogoutClick }) {
  return (
    <div className="contenedorMobileNav">
      <div className='logoMobileNavbar'>
        <img src={snSintesis} alt="Logo"/>
      </div>
      <div className='contenedorNavRoutes'>
        <ul>
          <Link className='hipervinculo' to={'/estarbien'} element={<EstarBien/>}>
            <li> { EstarBienNav } </li> 
          </Link>
          <Link className='hipervinculo' to={'/festivalrico'} element={<FestivalRico/>}>
            <li> { FestivalRicoNav } </li> 
          </Link>
          <Link className='hipervinculo' to={'/expoagro'} element={<Expoagro/>}>
            <li> { ExpoagroNav }  </li> 
          </Link>
        </ul>
      </div>
      <div className='contenedorSalirNavMobile'>
        <span className="salir" onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </span>
      </div>
    </div>
  );
}