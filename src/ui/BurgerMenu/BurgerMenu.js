import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({onClick}) => {
    return (
        <div className="burger-btn">
            <svg
                onClick={onClick}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
            >
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
    );
};

export default BurgerMenu;