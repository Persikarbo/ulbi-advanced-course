import { TabsItem } from "../ui/TabsItem";
import { Children, ReactElement } from "react";
import { TabsChildrenRoute } from "../config/types";

const getChildrenRoutes = (children: ReactElement[], isFirstRouteRoot = true): TabsChildrenRoute[] => {
    return Children.map(children, ({ props, type }, index) => {
        if (type !== TabsItem) {
            console.error(`[${type}] is not a <Tab> component. All component children of <Tabs> must be a <Tab> of <React.Fragment>.`)
        }
        return {
            path: isFirstRouteRoot && !index
                ? ""
                : (props.path.startsWith("/")
                    ? props.path
                    : "/" + props.path),
            index: !index,
            element: props.children,
            title: props.title
        }
    })
}

export {
    getChildrenRoutes
}
