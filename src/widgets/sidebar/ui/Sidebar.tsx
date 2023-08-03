import { classNames } from "shared/lib";
import styles from "./Sidebar.module.pcss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {

    const {
        className
    } = props;

    return (
        <div className={classNames(styles.sidebar, {}, [ className ])}>

        </div>
    );
};