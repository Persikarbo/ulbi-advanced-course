import { classNames } from "shared/lib";
import styles from "./NavLink.module.pcss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum ThemeNavLink {
    DEFAULT = "",
    INVERTED = "inverted"
}

interface NavLinkProps extends LinkProps {
    className?: string;
    theme?: ThemeNavLink;
}

export const NavLink: FC<NavLinkProps> = (props) => {

    const {
        className,
        to,
        children,
        theme= ThemeNavLink.DEFAULT,
        ...restProps
    } = props;

    return (
        <Link to={to}
              className={classNames(styles.navLink, {}, [ className, styles[theme] ])}
              {...restProps}
        >
            {children}
        </Link>
    );
};