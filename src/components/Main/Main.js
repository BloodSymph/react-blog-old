import React from 'react';
import AppRouter from "../AppRouter/AppRouter";
import './Main.css';

const Main = ({toElement}) => {

    return (
        <main className="main" ref={toElement}>
            <div className="container">
                <AppRouter/>
            </div>
        </main>
    );
};

export default Main;