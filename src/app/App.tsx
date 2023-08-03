import "./styles/index.pcss";
import { useTheme } from "app/providers";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";

export const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [ theme ])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};