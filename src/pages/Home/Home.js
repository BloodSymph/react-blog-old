import React from 'react';
import NavButtons from "../../ui/NavButtons/NavButtons";
import './Home.css';
import {motion} from "framer-motion";
import {titleAnimation, paragraphAnimation, buttonAnimation} from "../../helpers/animation/animationHome";

const Home = () => {

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            className="home"
        >
            <div className="home-body">
                <div className="home-text">
                    <motion.h2
                        variants={titleAnimation}
                        className="home-title"
                    >
                        This is my first React App :)
                    </motion.h2>
                    <motion.p
                        custom={1}
                        variants={paragraphAnimation}
                        className="home-description"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                        At autem consectetur culpa error in mollitia, necessitatibus nesciunt praesentium<br/>
                        quos sapiente, soluta unde ut! Adipisci, dolorem.
                    </motion.p>
                </div>
                <div className="home-buttons">
                    <NavButtons custom={2} variants={buttonAnimation} location="about/">Learn More</NavButtons>
                    <NavButtons custom={3} variants={buttonAnimation} location="blog/">Blog Page</NavButtons>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;