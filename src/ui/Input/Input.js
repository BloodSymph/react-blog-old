import React, {forwardRef} from 'react';
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref} className={classes.search}/>
    );
});

export default Input;