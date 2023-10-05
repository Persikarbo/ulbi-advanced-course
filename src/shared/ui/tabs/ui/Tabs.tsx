import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Tabs.module.pcss";
import { ComponentProps } from "shared/types";

export const Tabs: FC<ComponentProps> = (props) => {

    const {
        className,
        children
    } = props;

    return (
        <div className={classNames(styles.tabs, {}, [ className ])} >
            {children}
        </div>
    );
};