import React, { FC, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import { classNames } from "shared/lib";
import { ComponentProps } from "shared/types";
import styles from "./Tabs.module.pcss";
import { getChildrenRoutes } from "../lib";
import { Wrapper } from "./Wrapper";
import { TabsProviders } from "../config/providers";

interface TabsProps extends ComponentProps {
    routePath: string,
    children: ReactElement[]
}

export const Tabs: FC<TabsProps> = (props) => {

    const {
        className,
        children,
        routePath
    } = props;


    const childrenRoutes = getChildrenRoutes(children);
    const routes = useRoutes([
        {
            path: "/",
            element: <Wrapper />,
            children: childrenRoutes
        }
    ]);

    return (
        <TabsProviders.ContextProvider value={{ routePath, childrenRoutes }}>
            <div className={classNames(styles.tabs, {}, [ className ])}>
                {routes}
            </div>
        </TabsProviders.ContextProvider>
    )
};