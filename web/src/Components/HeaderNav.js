import React from "react";
import {Link} from 'react-router-dom';
import {MdExitToApp} from 'react-icons/md';
import InstagramLogo from '../Assets/InstagramLogo.png';

function HeaderNav() {
  return (
    <header>
      <nav>
        <img src={InstagramLogo} alt="Logo Instagram" />
        <Link to="/">
          <MdExitToApp size={25}/>
        </Link>
      </nav>
    </header>
  );
}

export default HeaderNav;
