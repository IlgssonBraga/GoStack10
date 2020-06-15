import React from 'react';
import '../styles/Header.css';
import { FaUserCircle } from "react-icons/fa";

function Header(){
    return (
        <div id="header">
            <h1><a href="http://localhost:8080">facebook</a></h1>
            <ul>
                <li><a href="#"><div id="containerlinkperfil"><span>Meu perfil </span> <FaUserCircle id="icon" /> </div></a></li>
            </ul>
        </div>
    )
}

export default Header;