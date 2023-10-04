import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Container.module.pcss";
import { ComponentProps } from "shared/types";

export const Container: FC<ComponentProps> = (props) => {

    const {
        className,
        children,
        ...restProps
    } = props;

    return (
        <div className={classNames(styles.container, {}, [ className ])} {...restProps}>
            {children}
        </div>
    );
};