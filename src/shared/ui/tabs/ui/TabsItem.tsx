import { FC, ReactNode } from "react";
import { ComponentProps } from "shared/types";

interface TabsItemProps extends ComponentProps {
    children?: ReactNode | undefined
}

export const TabsItem = (props: TabsItemProps): ReactNode => {

    const {
        children
    } = props;

    return children;
};