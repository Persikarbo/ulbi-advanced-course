import { FC, ReactNode } from "react";
import { ComponentProps } from "shared/types";

interface TabsItemProps extends ComponentProps {
    title: string;
    path?: string;
}

export const TabsItem: FC<TabsItemProps> = (props) => {

    const {
        children
    } = props;

    return (
        <>{children}</>
    );
};