import { NavLink } from "shared/ui";
import { classNames } from "shared/lib";
import cls from "./Navbar.module.pcss";
import { AppLinkTheme } from "shared/ui/navLink/NavLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {

    const {
        className
    } = props;

    return (
        <div className={classNames(cls.navbar, {}, [ className ])}>
            <div className={classNames(cls.links)}>
                <NavLink theme={AppLinkTheme.INVERTED} to={"/"}>Главная</NavLink>
                <NavLink theme={AppLinkTheme.INVERTED} to={"/about"}>О сайте</NavLink>
            </div>
        </div>
    );
};