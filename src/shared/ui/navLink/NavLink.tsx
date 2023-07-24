import { classNames } from "shared/lib";
import cls from "./NavLink.module.pcss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    DEFAULT = "",
    INVERTED = "inverted"
}

interface NavLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const NavLink: FC<NavLinkProps> = (props) => {

    const {
        className,
        to,
        children,
        theme= AppLinkTheme.DEFAULT,
        ...restProps
    } = props;

    return (
        <Link to={to}
              className={classNames(cls.navLink, {}, [ className, cls[theme] ])}
              {...restProps}
        >
            {children}
        </Link>
    );
};