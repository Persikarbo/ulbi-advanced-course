import { NavLink, ThemeNavLink } from "shared/ui/navLink";
import { classNames } from "shared/lib";
import styles from "./Header.module.pcss";
import { SwitchTheme } from "features/theme";
import { Container } from "shared/ui/container";
import { RoutePath } from "shared/config/routes";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {

    const {
        className
    } = props;

    return (
        <header className={classNames(styles.header, {}, [ className ])}>
            <Container className={classNames(styles.inner)}>
                <SwitchTheme />
                <div className={classNames(styles.links)}>
                    <NavLink theme={ThemeNavLink.INVERTED} to={RoutePath.main}>Главная</NavLink>
                    <NavLink theme={ThemeNavLink.INVERTED} to={RoutePath.about}>О сайте</NavLink>
                </div>
            </Container>
        </header>
    );
};