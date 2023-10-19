import React from 'react';
import './SkillsCards.css';
import {motion} from "framer-motion";
import {columnAnimation} from "../../helpers/animation/animationCards";
import {cardsData} from "../../store/store";
import SkillsItems from "./SkillsItems";

const SkillsCards = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="skills"
        >
            <div className="skill-row">
                {cardsData.map((item, index) =>
                    <SkillsItems
                        custom={index}
                        variants={columnAnimation}
                        item={item}
                        key={index}
                    />
                )}
            </div>
        </motion.div>
    );
};

export default SkillsCards;