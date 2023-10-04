import { classNames } from "shared/lib";
import styles from "./Icon.module.pcss";
import { SVGAttributes } from "react";

export enum IconSize {
    M = "sizeM",
    L = "sizeL"
}

interface IconProps extends SVGAttributes<SVGSVGElement> {
    size?: IconSize,
    url?: string
}

export const Icon = (props: IconProps) => {

    const {
        id,
        className,
        size,
        url,
        ...restProps
    } = props;

    return (
        <svg className={classNames(styles.icon, {}, [ className, styles[size] ])} { ...restProps } >
            <use href={url} />
        </svg>
    );
};