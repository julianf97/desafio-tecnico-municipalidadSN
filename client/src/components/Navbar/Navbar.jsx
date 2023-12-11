import { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import LogOut from './LogOut';
import LogoNavbar from './LogoNavbar';
import "./_navbar.scss";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleLogoutClick = () => {
    localStorage.removeItem("userChallengeMunicipalidad");
    localStorage.setItem('homeAlertShown', 'false');
    window.location.href = "/";
  };

  return (
    <nav className="contenedorPrincipalNavbar">
      <LogoNavbar/>
      <DesktopNav/>
      <LogOut handleLogoutClick={handleLogoutClick} isVisible={isVisible} setIsVisible={setIsVisible} />
      {isVisible && (
        <MobileNav handleLogoutClick={() => handleLogoutClick()} />
      )}
    </nav>
  );
}