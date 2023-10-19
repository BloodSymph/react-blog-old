import React from 'react';
import {NavLink} from "react-router-dom";


const NavbarItems = ({item, handleClick, isSelected, active}) => {
    return (
        <li className={active ? 'menu-items active': 'menu-items'}>
            <NavLink
                onClick={handleClick}
                to={item.path}
                style={
                    {
                        color: isSelected ? 'aqua': 'white',
                        textDecoration: isSelected ? 'underline': 'none',
                    }
                }
                className="menu-links"
            >
                {item.title}
            </NavLink>
        </li>
    );
};

export default NavbarItems;