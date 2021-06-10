import React from "react";
import ComLike from '../Assets/comlike.png'
import SemLike from '../Assets/semlike.png'

function FeedCard({picture}) {
  return (
    <div className="card-container">
      <div className="card-header">
        <img
          src="https://avatars.githubusercontent.com/u/43589505?v=4"
          alt="Foto perfil"
        />
        <h2>Perfil do usuário</h2>
      </div>
      <div className="card-photo">
        <img
          src={picture}
          alt="Imagem"
        />
      </div>
      <div className="card-footer">
        <div className="card-metadata">
          <img src={SemLike} alt="Likes" />
          <h3>65 pessoas gostaram</h3>
        </div>
        <div className="card-info">
          <p>
            <a href="/feed">Nome usuário</a>Essa é a descrição do post
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
