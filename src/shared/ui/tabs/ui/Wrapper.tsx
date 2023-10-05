import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { classNames } from "shared/lib";
import { FC } from "react";
import styles from "./Tabs.module.pcss";

export const Wrapper: FC = () => {

    return (
        <div className={classNames(styles.wrapper)}>
            <Nav />
            <div className={classNames(styles.content)}>
                <Outlet />
            </div>
        </div>
    )
}
