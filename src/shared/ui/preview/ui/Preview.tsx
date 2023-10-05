import { FC } from "react";
import { ComponentProps } from "shared/types";
import { classNames } from "shared/lib";
import styles from "./Preview.module.pcss";
import sanitizeHtml from "sanitize-html";

interface PreviewProps extends ComponentProps {
    html: string,
    isSanitizerEnabled?: boolean
}

export const Preview: FC<PreviewProps> = (props) => {

    const {
        className,
        html,
        isSanitizerEnabled = true
    } = props;

    return (
        <div className={classNames(styles.preview, {}, [ className ])}
             dangerouslySetInnerHTML={{ __html: isSanitizerEnabled ? sanitizeHtml(html) : html}}/>
    )
}