import { createContext } from "react";
import { TabsChildrenRoute } from "./types";

export type TabsContext = {
    routePath?: string;
    childrenRoutes?: TabsChildrenRoute[];
}

const context = createContext<TabsContext>({});

export const TabsProviders = {
    Context: context,
    ContextProvider: context.Provider
}
