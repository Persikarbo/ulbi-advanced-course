import React, { useState } from 'react';
import classes from "./style.module.pcss";

export const Counter = () => {

    const [ count, setCount ] = useState(0);

    const onClick = () => setCount(count + 1);

    return (
        <div className={classes.counter}>
            <h1>{count}</h1>
            <button onClick={onClick}>Увеличить счетчик</button>
        </div>
    );
};