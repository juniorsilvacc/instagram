import React, { useState } from "react";
import HeroImg from "../Assets/hero-img.png";
import InputStandart from "./InputStandart";

function RegisterMainSection() {

  const [show, setShow] = useState(1);

  const [username, usernameSet] = useState('');
  const [password, passwordSet] = useState('');
  const [name, nameSet] = useState('');
  const [description, descriptionSet] = useState('');
  const [avatar, avatarSet] = useState('');
  const [url, urlSet] = useState('');

  function loadFirstPage(e) {
    e.preventDefault();
    setShow(1);
  }

  function loadSecondPage(e) {
    e.preventDefault();
    setShow(2);
  }

  return (
    <main>
      <div className="form-login-register">
        <img src={HeroImg} alt="Logo Instagram" />
        <div className="form">
          <form action="" className="form-register">
            <h1>Cadastrar-se</h1>
            {show === 1 ? 
              <fieldset>
                <InputStandart type="text" title="Usuário" />
                <InputStandart type="password" title="Senha" />
                <InputStandart type="text" title="Nome" />
              </fieldset>
                  :
              <fieldset>
                <InputStandart type="text" title="Descrição" />
                <InputStandart type="text" title="Perfil" />
                <InputStandart type="text" title="Url" />
              </fieldset>
            }
            <div className="buttonNavigation">
              {show === 1 ?
                 <button style={{background: '#0095f6'}} onClick={loadFirstPage}>1</button>
                 :
                 <button onClick={loadFirstPage}>1</button>
              }
              {show === 2 ?
                <button style={{background: '#0095f6'}} onClick={loadSecondPage}>2</button> 
                :
                <button onClick={loadSecondPage}>2</button>
              }
              <button disable={true}>Finalizar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterMainSection;
