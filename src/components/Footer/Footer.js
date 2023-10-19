import React from 'react';
import './Footer.css';
import IconsList from "../../ui/IconsList/IconsList";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-body">
                    <IconsList/>
                    <p className="watermark">@BloodSymphony</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;