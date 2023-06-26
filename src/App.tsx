import React from 'react';
import { Counter } from "./components/counter";
import "./style.pcss";
export const App = () => {
    return (
        <div className={"app"}>
            <p>Some text</p>
            <Counter />
        </div>
    );
};