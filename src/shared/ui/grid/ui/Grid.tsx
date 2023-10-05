import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Grid.module.pcss";
import { ComponentProps } from "shared/types";

interface GridProps extends ComponentProps {
    columns?: number;
    rows?: number;
    gapX?: number;
}

export const Grid: FC<GridProps> = (props) => {

    const {
        className,
        children,
        mods: initMods,
        columns,
        rows,
        gapX
    } = props;

    const mods = {
        ...initMods,
        [styles[`columns-${columns}`]]: !!columns,
        [styles[`rows-${rows}`]]: !!rows,
        [styles[`gapX-${gapX}`]]: !!gapX
    }

    return (
        <div className={classNames(styles.grid, mods, [ className ])} >
            {children}
        </div>
    );
};