import React from 'react'
import {Link} from 'react-router-dom';

function BottomNavRegister() {
  return (
    <footer>
      <nav className="buttonRegister">
        <p>Já possui uma conta? <Link to="/" className="linkRegister">Entrar</Link></p>
      </nav>
    </footer>
  )
}

export default BottomNavRegister
