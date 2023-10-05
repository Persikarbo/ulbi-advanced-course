import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Grid.module.pcss";
import { ComponentProps } from "shared/types";

export const GridItem: FC<ComponentProps> = (props) => {

    const {
        className,
        children,
        mods
    } = props;

    return (
        <div className={classNames(styles.grid__item, mods, [ className ])} >
            {children}
        </div>
    );
};