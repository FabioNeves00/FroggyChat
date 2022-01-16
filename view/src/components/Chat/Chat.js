import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

import Header from './Header/Header'
import Input from './Input/Input';
import Mensagens from './Mensagens/Mensagens';

import './Chat.css'
let socket;

const Chat = ({ location }) => {
  const [nome, setNome] = useState('');
  const [sala, setSala] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);

  const POINTER = 'http://localhost:5000/'

  useEffect(() => {
    const { nome, sala } = queryString.parse(location.search)

    document.title = `Sala ${sala}`
    
    socket = io(POINTER, {  
      cors: {
      origin: "http://localhost:5000",
      credentials: true
    },transports : ['websocket'] });

    setNome(nome)
    setSala(sala)

    socket.emit('join', { nome, sala }, (error) => {
      if(error) {
        alert(error);
      }
    })
  }, [POINTER, location.search])

  useEffect(() => {
    socket.on('mensagem', mensagem => {
      setMensagens([...mensagens, mensagem])
    })
  }, [mensagens])

  const enviarMsg = (event) => {
    event.preventDefault();
    if (mensagem) {
      socket.emit('enviarMsg', mensagem, () => setMensagem(''))
    }
  }

  window.onbeforeunload = () => {
      socket.emit('disconnect')
  };

  return (
    <div id="body">
      <Header sala={sala} nome={nome} />
      <div className="background"></div>
      <div className="chatContainer">
        <section className="chat">
          <div className="msgs">
            <Mensagens mensagens={mensagens} nome={nome}/>
          </div>
          <Input mensagem={mensagem} setMensagem={setMensagem} enviarMsg={enviarMsg}/>
        </section>
      </div>
    </div>
  );
}

export default Chat;