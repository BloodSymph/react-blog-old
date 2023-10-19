import React from 'react';
import './Header.css';
import Navbar from "../../ui/Navbar/Navbar";
import HeaderItems from "../HeaderItems/HeaderItems";

const Header = ({handleClick}) => {
    return (
        <header className="header">
            <div className="container">
                <Navbar/>
                <HeaderItems handleClick={handleClick}/>
            </div>
        </header>
    );
};

export default Header;