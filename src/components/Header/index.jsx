import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../../assets/icons/Logo";
import Menu from "../../assets/icons/Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(true);
  };
  return (
    <header>
      <nav className="nav">
        {/* Logo container start */}
        <div className="nav__logo-container">
          <Logo />
        </div>
        {/* Logo container end */}
        {/* Hamburger icon container */}
        <div className="nav__menu-icon" onClick={handleClick}>
          <Menu />
        </div>
        <HamburgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
}
