import React, {useEffect} from 'react';
import {useScroll} from "../../hooks/useScroll";
import './About.css';
import SkillsCards from "../../ui/SkillsCards/SkillsCards";
import {motion} from "framer-motion";
import {titleAnimation, textAnimation} from "../../helpers/animation/animationAbout";

const About = () => {

    const [elementRef, setScroll] = useScroll();

    useEffect(() => {
        return () => {
            setScroll();
        };
    }, [elementRef, setScroll]);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="about"
            ref={elementRef}
        >
            <div className="about-body">
                <div className="about-text">
                    <motion.h2
                        variants={titleAnimation}
                        className="about-title"
                    >
                        About this project!
                    </motion.h2>
                    <motion.p
                        custom={2}
                        variants={textAnimation}
                        className="about-description"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                        Nam officiis placeat ratione! Assumenda at eligendi laudantium quaerat sapiente sequi velit?
                    </motion.p>
                </div>
                <SkillsCards/>
            </div>
        </motion.section>
    );
};

export default About;