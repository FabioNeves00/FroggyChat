import React, { useState } from 'react';
import freg from '../../assets/freg.png';
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {
    const [nome, setNome] = useState('');
    const [sala, setSala] = useState('');

    document.title = 'Froggy Chat | Join'

    return (
            <div className="joinContainer">
                <div className="title">
                    <Link to="/secret" style={{textDecoration:'none'}}>
                        <img src={freg} alt="freg" />
                    </Link>
                    <h1>Join</h1>
                </div>
                <div className="joinInputsContainer">
                    <input maxLength='12' className="joinInput" type="text" placeholder="Your nickname" onChange={(event) => {
                        setNome(event.target.value)
                    }} />
                    <input maxLength='5' className="joinInput" type="text" placeholder="Room ID" onChange={(event) => {
                        setSala(event.target.value)
                    }} />
                </div>
                <div className="joinButton">
                    <Link 
                        style={{ textDecoration: 'none' }}
                        onClick={event => {
                            if (!nome || !sala) {
                                event.preventDefault();
                                document.getElementById('error').innerText = 'Preencha corretamente os campos'
                            }
                        }}
                        to={`/chat?nome=${nome}&sala=${sala}`} >
                        <button className="submit">
                            <span>Join Room</span>
                            <span className="underline"></span>
                        </button>
                    </Link>
                    <span id="error"></span>
                </div>
            </div>
    );
}

export default Join;