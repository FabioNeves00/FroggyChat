import React from 'react';

const Mensagem = ({mensagem: {user, text}, nome}) => {
    
    const trimmedName = nome.trim().toLowerCase()
    let currentUser = user === trimmedName

    return (
        currentUser
            ? (
                <div className="msgContainer enviado">
                    <p className="emissor enviado">{trimmedName}</p>
                    <div className="msgBox enviado">
                        <p className="msgText enviado">{text}</p>
                    </div>
                </div>
            )
            : (
                <div className="msgContainer recebido">
                    <p className="emissor recebido">{trimmedName}</p>
                    <div className="msgBox recebido">
                        <p className="msgText recebido">{text}</p>
                    </div>
                </div>
            )
    )
} 

export default Mensagem;
