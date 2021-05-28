import React, { useState } from "react";
import HeroImg from "../Assets/hero-img.png";
import InputStandart from "./InputStandart";

import api from '../Services/api'

function RegisterMainSection() {

  const [show, setShow] = useState(1);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');
  const [url, setUrl] = useState('');

  const [loading, setLoading] = useState(false);

  function loadFirstPage(e) {
    e.preventDefault();
    setShow(1);
  }

  function loadSecondPage(e) {
    e.preventDefault();
    setShow(2);
  }

  async function registrationHandler(e){
    e.preventDefault();
    setLoading(true);

    try {

      await api.post('users', {
        username,
        password,
        name,
        description,
        avatar,
        url
      })

      

      alert('Usuário cadastrado com sucesso.');
      setLoading(false);

        setUsername('');
        setPassword('');
        setName('');
        setDescription('');
        setAvatar('');
        setUrl('');

    } catch (err) {
      alert('Erro ao cadastrar usuário.');
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="form-login-register">
        <img src={HeroImg} alt="Logo Instagram" />
        <div className="form">
          <form action="" className="form-register">
            {loading ? 
              <h1>Criando usuária...</h1>
            :

            <>
              <h1>Cadastrar-se</h1>
              {show === 1 ? 
                <fieldset>
                  <InputStandart 
                    type="text" 
                    title="Usuário" 
                    state={username}
                    setState={e=>setUsername(e.target.value)}
                  />
                  
                  <InputStandart 
                    type="password" 
                    title="Senha"
                    state={password}
                    setState={e=>setPassword(e.target.value)} 
                  />
                  <InputStandart 
                    type="text" 
                    title="Nome" 
                    state={name}
                    setState={e=>setName(e.target.value)}
                  />
                </fieldset>
                    :
                <fieldset>
                  <InputStandart 
                    type="text" 
                    title="Descrição" 
                    state={description}
                    setState={e=>setDescription(e.target.value)}
                  />
                  <InputStandart 
                    type="text" 
                    title="Perfil" 
                    state={avatar}
                    setState={e=>setAvatar(e.target.value)}
                  />
                  <InputStandart 
                    type="text" 
                    title="Url" 
                    state={url}
                    setState={e=>setUrl(e.target.value)}
                  />
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

                {username && name && password && description && avatar && url && <button 
                  className="buttonFinish"
                  onClick={registrationHandler}
                >Finalizar</button>}

                
              </div>
            </>
            }
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterMainSection;
