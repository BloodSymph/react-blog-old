import React, {forwardRef} from 'react';
import {motion} from "framer-motion";


const SkillsItems = forwardRef(({item}, ref) => {
    return (
        <div className="skill-column" ref={ref}>
            <div className="skill-items">
                <div className="skill-images">
                    <img src={item.image} alt="react"/>
                </div>
                <div className="skill-text">
                    <h3 className="skill-title">{item.title}</h3>
                    <p className="skill-description">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
});

export default motion(SkillsItems);