import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { appRoutes } from "shared/config";

export const AppRouter = () => {

    const routes = useRoutes(appRoutes);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            { routes }
        </Suspense>
    )
}