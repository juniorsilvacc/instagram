/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeroImg from "../Assets/hero-img.png";
import {Link} from 'react-router-dom';

function MainSection() {
  return (
    <main>
      <div className="form-login-register">
        <img src={HeroImg} alt="Logo Instagram" />
        <div className="form">
          <form action="">
            <h1>Entrar</h1>
            <fieldset>
              <div className="input-field">
                <input id="user" type="text" placeholder="Usuário" />
              </div>
              <div className="input-field">
                <input id="password" type="password" placeholder="Senha" />
              </div>
            </fieldset>
            <button>Connectar</button>
          </form>
          <div className="input-field-notCont">
            <p>Não tem uma conta? <Link className="buttonRegister" to="register">Cadastre-se</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
