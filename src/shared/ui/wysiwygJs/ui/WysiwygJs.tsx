import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./WysiwygJs.module.pcss";
import { ComponentProps } from "shared/types";

interface WysiwygJsProps extends ComponentProps {
    id: string;
    value: string;
    onChange?: Function;
}

const defaultProps = {
    value: ""
}

export const WysiwygJs: FC<WysiwygJsProps> = (props) => {

    const {
        className,
        children,
        id,
        value,
        onChange,
        ...restProps
    } = props;

    return (
        <div className={classNames(styles.wysiwygJs, {}, [ className ])} {...restProps}>
            Here must be second editor
        </div>
    );
};

WysiwygJs.defaultProps = defaultProps;