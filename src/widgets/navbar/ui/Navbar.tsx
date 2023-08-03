import { NavLink, ThemeNavLink } from "shared/ui/navLink";
import { classNames } from "shared/lib";
import styles from "./Navbar.module.pcss";
import { SwitchTheme } from "features/theme";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {

    const {
        className
    } = props;

    return (
        <div className={classNames(styles.navbar, {}, [ className ])}>
            <SwitchTheme />
            <div className={classNames(styles.links)}>
                <NavLink theme={ThemeNavLink.INVERTED} to={"/"}>Главная</NavLink>
                <NavLink theme={ThemeNavLink.INVERTED} to={"/about"}>О сайте</NavLink>
            </div>
        </div>
    );
};