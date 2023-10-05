import { Link, To, useMatch, useResolvedPath } from "react-router-dom";
import { classNames } from "shared/lib";
import { FC } from "react";
import styles from "./Tabs.module.pcss";

interface NavItemProps {
    to: To;
    title: string;
}

export const NavItem: FC<NavItemProps> = (props) => {

    const {
        to,
        title
    } = props;

    const resolved = useResolvedPath(to);
    const isActive = useMatch({ path: resolved.pathname, end: true });

    return (
        <li className={classNames(styles.nav__item, { [styles.isActive]: !!isActive })}>
            <Link to={to}>{title}</Link>
        </li>
    )
}
