import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { appRoutes } from "shared/config";
import { PageLayout } from "shared/ui/pageLayout";

export const AppRouter = () => {

    const routes = useRoutes(appRoutes);

    return (
        <Suspense fallback={<PageLayout>Loading...</PageLayout>}>
            { routes }
        </Suspense>
    )
}