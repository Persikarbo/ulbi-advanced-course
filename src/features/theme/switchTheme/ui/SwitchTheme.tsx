import { classNames } from "shared/lib";
import styles from "./SwitchTheme.module.pcss";
import { useTheme } from "app/providers";
import { Button } from "shared/ui/button";
import { Icon, IconSize } from "shared/ui/icon";
import IconTheme from "@assets/icons/icon-theme.svg";

interface ThemeSwitcherProps {
    className?: string;
}

export const SwitchTheme = (props: ThemeSwitcherProps) => {

    const {
        className
    } = props;

    const { toggleTheme } = useTheme();

    return (
        <Button className={classNames(styles.themeSwitcher, {}, [ className ])}
                onClick={toggleTheme}
        >
            <Icon id={IconTheme.id} size={IconSize.L}/>
        </Button>
    );
};