import "./styles/index.pcss";
import { useTheme } from "app/providers";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";

export const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [ theme ])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Переключить тему</button>
        </div>
    );
};