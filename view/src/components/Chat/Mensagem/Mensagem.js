import React from 'react';
import './MsgEnviada.css'
import './MsgRecebida.css'
import './AdminMsg.css'
const Mensagem = ({ mensagem: { user, text }, nome }) => {
    let currentUser = false
    const trimmedName = nome.trim().toLowerCase()
    if (user === trimmedName) {
        currentUser = true
    }
    if (user === 'admin') {
        return (
            <div className="admin_container">
                <div className="msgBox_admin">
                    <p className="msgText_admin">{text}</p>
                </div>
            </div>
        )
    }
    return (
        currentUser
            ? (
                <div className='msgEnv'>
                    <div className="msgContainer_enviado">
                        <p className="emissor_enviado">{trimmedName}</p>
                        <div className="msgBox_enviado">
                            <p className="msgText_enviado">{text}</p>
                        </div>
                    </div>
                </div>
            )
            : (
                <div className='msgRec'>
                    <div className="msgContainer_recebido">
                        <p className="emissor_recebido">{user.trim().toLowerCase()}</p>
                        <div className="msgBox_recebido">
                            <p className="msgText_recebido">{text}</p>
                        </div>
                    </div>
                </div>
            )
    )
}

export default Mensagem;
