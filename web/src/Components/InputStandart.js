import React from "react";

function InputStandart({title, type}) {
  return (
    <div className="input-field">
      <label htmlFor={title}></label>
      <input id={title} type={type} placeholder={`Preencha o campo ${title.toLowerCase()}`} />
    </div>
  );
}

export default InputStandart;
