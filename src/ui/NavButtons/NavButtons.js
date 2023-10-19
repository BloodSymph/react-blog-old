import React, {forwardRef} from 'react';
import {Link} from "react-router-dom";
import classes from './NavButtons.module.css';
import {motion} from "framer-motion";

const NavButtons = forwardRef(({location, children, ...props}, ref) => {
    return (
        <Link
            to={location}
            {...props}
            className={classes.btn}
            ref={ref}
        >
            {children}
        </Link>
    );
});

export default motion(NavButtons);