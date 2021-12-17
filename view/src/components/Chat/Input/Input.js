import React from 'react';

import './Input.css'

const Input = ({mensagem, setMensagem, enviarMsg}) => {
    return (
        <form className="form">
            <input className="chatInput"
                value={mensagem}
                placeholder="Digite sua mensagem..."
                onChange={(event) => setMensagem(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' ? enviarMsg(event) : null}
            />
            <button onClick={(event) => enviarMsg(event)}><span>➤</span><span className="underline"></span></button>
        </form>
    );
}

export default Input;
