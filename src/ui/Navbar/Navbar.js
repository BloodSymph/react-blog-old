import React, {useState} from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {navbarData} from "../../store/store";
import NavbarItems from "./NavbarItems";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
    const [isActive, setActive] = useState(0);
    const [menuActive, setIsActive] = useState(false);

    return (
        <nav className="menu">
            <NavLink to="/" className="logo">React Blog</NavLink>
            <ul className={menuActive ? 'menu-list active': 'menu-list'}>
                {navbarData.map((item, index) =>
                    <NavbarItems
                        active={menuActive}
                        key={index}
                        item={item}
                        isSelected={isActive === index}
                        handleClick={() => setActive(index)}
                    />
                )}
            </ul>
            <BurgerMenu onClick={() => setIsActive(!menuActive)}/>
        </nav>
    );
};

export default Navbar;