import React, { Suspense } from 'react';
import "./styles/index.pcss";
import { Link, useRoutes } from "react-router-dom";
import { AboutPage, MainPage } from "./pages";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./utils/classNames";

export const App = () => {

    const { theme, toggleTheme } = useTheme();

    const routes = useRoutes([
        {
            path: "/about",
            element: <AboutPage />
        },
        {
            path: "/",
            element: <MainPage />
        }
    ]);

    return (
        <div className={classNames("app", {}, [ theme ])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                { routes }
            </Suspense>
            <button onClick={toggleTheme}>Переключить тему</button>
        </div>
    );
};