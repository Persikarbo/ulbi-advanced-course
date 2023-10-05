import { FC, useContext } from "react";
import { NavItem } from "./NavItem";
import { TabsProviders } from "../config/providers";
import { classNames } from "shared/lib";
import styles from "./Tabs.module.pcss";

export const Nav: FC = () => {

    const { routePath, childrenRoutes } = useContext(TabsProviders.Context);

    return (
        <ul className={classNames(styles.nav)}>
            { childrenRoutes.map(({ path, title }) =>
                <NavItem key={title} to={`${routePath}${path}`} title={title} />
            ) }
        </ul>
    )
}
