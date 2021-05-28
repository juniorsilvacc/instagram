import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineCamera } from "react-icons/ai";
import { MdPermIdentity } from "react-icons/md";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <footer>
      <nav>
        <Link to="/feed">
          <RiHome2Line className="icons" size={25} />
        </Link>
        <Link to="/post">
          <AiOutlineCamera className="icons" size={25} />
        </Link>
        <Link to="/profile">
          <MdPermIdentity className="icons" size={25} />
        </Link>
      </nav>
    </footer>
  );
}

export default BottomNav;
