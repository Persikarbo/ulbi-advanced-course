import { RouteObject, RouteProps } from "react-router-dom";
import { AboutPage, MainPage } from "pages";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const appRoutes: RouteObject[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]