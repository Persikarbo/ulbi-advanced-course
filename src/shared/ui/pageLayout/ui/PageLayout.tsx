import { FC, ReactNode } from "react";
import { classNames } from "shared/lib";
import styles from "./PageLayout.module.pcss";
import { Container } from "shared/ui/container";
import { ComponentProps } from "shared/types";

interface PageLayoutProps extends ComponentProps {
    headerSlot?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {

    const {
        className,
        children,
        headerSlot,
        ...restProps
    } = props;

    return (
        <main className={classNames(styles.pageLayout, {}, [ className ])} {...restProps}>
            <Container>
                <div className={classNames(styles.wrapper)}>
                    {headerSlot && <div className={classNames(styles.header)}>
                        {headerSlot}
                    </div>}
                    <div className={classNames(styles.body)}>
                        {children}
                    </div>
                </div>
            </Container>
        </main>
    );
};