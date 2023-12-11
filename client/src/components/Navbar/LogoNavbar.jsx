import snSintesis from '../../assets/sn-sintesis.png';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';

export default function LogoNavbar() {
  return (
    <div className="contenedorLogo">
      <Link className='hipervinculo' to={'/'} element={<Home/>}>
        <img src={snSintesis} alt="Logo" />
      </Link> 
    </div>
  );
}