/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import HeroImg from "../Assets/hero-img.png";
import {Link} from 'react-router-dom';
import InputStandart from "./InputStandart";

function MainSection() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <div className="form-login-register">
        <img src={HeroImg} alt="Logo Instagram" />
        <div className="form">
          <form action="">
            <h1>Entrar</h1>
            <fieldset>
              <div className="input-field">
                <InputStandart 
                  type="text" 
                  title="Usuário" 
                  state={username}
                  setState={e=>setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <InputStandart 
                  type="password" 
                  title="Senha" 
                  state={password}
                  setState={e=>setPassword(e.target.value)}
                />
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
