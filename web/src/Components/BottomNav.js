import React from "react";
import {RiHome2Line} from 'react-icons/ri'
import {AiOutlineCamera} from 'react-icons/ai'
import {MdPermIdentity} from 'react-icons/md'

function BottomNav() {
  return (
    <footer>
      <nav>
       <RiHome2Line className="icons" size={25}/>
       <AiOutlineCamera className="icons" size={25}/>
       <MdPermIdentity className="icons" size={25}/>
      </nav>
    </footer>
  );
}

export default BottomNav;
