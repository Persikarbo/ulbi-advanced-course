import { FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Wysiwyg.module.pcss";
import { ComponentProps } from "shared/types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { WysiwygOnChangeFunction } from "../config/types";
import { modules } from "../config/modules";

interface WysiwygProps extends ComponentProps {
    id: string;
    value: string;
    onChange?: WysiwygOnChangeFunction;
}

const defaultProps = {
    value: ""
}

export const Wysiwyg: FC<WysiwygProps> = (props) => {

    const {
        className,
        children,
        id,
        value,
        onChange,
        ...restProps
    } = props;

    return (
        <div className={classNames(styles.wysiwyg, {}, [ className ])} {...restProps}>
            <ReactQuill theme={"snow"}
                        value={value}
                        onChange={(...args) => onChange(id, ...args)}
                        className={classNames(styles.quill)}
                        modules={modules}
            />
        </div>
    );
};

Wysiwyg.defaultProps = defaultProps;