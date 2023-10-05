import { ReactNode } from "react";

export type TabsChildrenRoute = {
    path: string,
    index: boolean,
    element: ReactNode | undefined,
    title: string
}