import React from 'react';
import './HeaderItems.css';
import Chevron from "../../ui/Chevron/Chevron";
import {motion} from "framer-motion";
import {titleAnimation, paragraphAnimation} from "../../helpers/animation/animationHeaderItems";

const HeaderItems = ({handleClick}) => {

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            className="header-items"
        >
            <motion.h1
                variants={titleAnimation}
                className="header-title"
            >
                Welcome to my Blog!
            </motion.h1>
            <motion.p
                custom={1}
                variants={paragraphAnimation}
                className="header-text"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus esse ipsum magni minima minus optio pariatur quisquam, voluptatum? Dolorem, maiores.
            </motion.p>
            <Chevron onClick={handleClick}/>
        </motion.div>
    );
};

export default HeaderItems;