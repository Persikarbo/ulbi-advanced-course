import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Wysiwyg.module.pcss";
import { ComponentProps } from "shared/types";

export const Wysiwyg: FC<ComponentProps> = (props) => {

    const {
        className,
        children,
        ...restProps
    } = props;

    return (
        <div className={classNames(styles.wysiwyg, {}, [ className ])} {...restProps}>
            Wysiwyg
        </div>
    );
};