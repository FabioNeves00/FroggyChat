import React from 'react';
import { Link } from 'react-router-dom'

import freg from '../../assets/freg-icon.png'
import './Header.css'

const Header = ({ sala, nome }) => {
    return (
        <header>
            <nav>
                <div className="backContainer">
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/`} >
                        <button className="back" type="submit">
                            <span className="text">⟻ Voltar</span>
                            <span className="underline"></span>
                        </button>
                    </Link>
                </div>
                <div className="logoContainer">
                    <img src={freg} alt="freg_logo" className="logo" />
                    <label>Froggy Chat</label>
                    <img src={freg} alt="freg_logo" className="logo" />
                </div>
                <ul id="infos">
                    <li><label id="nome">Nome: {nome}</label></li>
                    <li><label id="sala">Sala: {sala}</label></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
