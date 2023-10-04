import { classNames } from "shared/lib";
import styles from "./BackBtn.module.pcss";
import { FC, MouseEvent } from "react";
import { ComponentProps } from "shared/types";
import { Button, ButtonTheme } from "shared/ui/button";
import { useNavigate } from "react-router-dom";

export const BackBtn: FC<ComponentProps> = (props) => {

    const {
        className,
        children,
        ...restProps
    } = props;

    const navigate = useNavigate();

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className={classNames(styles.backBtn, {}, [ className ])} { ...restProps }>
            <Button onClick={onClick} theme={ButtonTheme.BORDERED}>
                Назад
            </Button>
        </div>
    );
};