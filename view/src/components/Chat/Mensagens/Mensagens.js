import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom'
import Mensagem from '../Mensagem/Mensagem';

import './Mensagens.css'

const Mensagens = ({mensagens, nome}) => {
    return (
        <ScrolltoBottom>
            {mensagens.map((mensagem, index) => <div key={index}><Mensagem mensagem={mensagem} nome={nome}/></div>)}
        </ScrolltoBottom>
    );
}

export default Mensagens;
