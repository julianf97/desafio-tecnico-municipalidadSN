import { Link } from 'react-router-dom';
import EstarBien from '../../pages/EstarBien/EstarBien';
import FestivalRico from '../../pages/FestivalRico/FestivalRico';
import Expoagro from '../../pages/ExpoAgro/ExpoAgro';
import { EstarBienNav, ExpoagroNav, FestivalRicoNav } from '../../constants/NavbarConstants';

export default function DesktopNav() {
  return (
    <div className='contenedorRoutesNavDesktop'>
      <ul className='navLista'>
        <Link className='hipervinculo' to={'/estarbien'} element={<EstarBien/>}>
          <li>{ EstarBienNav }</li>
        </Link>
        <Link className='hipervinculo' to={'/festivalrico'} element={<FestivalRico/>}>
          <li>{ FestivalRicoNav }</li>
        </Link>
        <Link className='hipervinculo' to={'/expoagro'} element={<Expoagro/>}>
          <li>{ ExpoagroNav }</li>
        </Link>
      </ul>
    </div>
  );
}