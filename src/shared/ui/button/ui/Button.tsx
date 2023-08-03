import { classNames } from "shared/lib";
import styles from "./Button.module.pcss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    BORDERED = "bordered"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...restProps
    } = props;

    return (
        <button className={classNames(styles.button, {}, [ className, styles[theme] ])}
                {...restProps}
        >
            {children}
        </button>
    );
};