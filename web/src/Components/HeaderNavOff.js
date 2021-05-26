import React from "react";
import InstagramLogo from '../Assets/InstagramLogo.png';

function HeaderNavOff() {
  return (
    <header>
      <nav className="nav-loggedout">
        <img src={InstagramLogo} alt="Logo Instagram" />
      </nav>
    </header>
  );
}

export default HeaderNavOff;
