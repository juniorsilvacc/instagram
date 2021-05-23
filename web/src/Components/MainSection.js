/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function MainSection() {
  return (
    <main>
      <div className="form-login-register">
        <img src="" alt="Logo Instagram" />
        <form action="">
          <fieldset>
            <div className="input-field">
              <label for="user">Usuário</label>
              <input id="user" type="text" placeholder="Usuário" />
            </div>
            <div className="input-field">
              <label for="password">Senha</label>
              <input id="password" type="password" placeholder="Senha" />
            </div>
          </fieldset>
          <button>Connectar</button>
        </form>
        <div>
          <p>
            Não é cadastrado ainda? <a href="#">Cadastre-se agora!</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
