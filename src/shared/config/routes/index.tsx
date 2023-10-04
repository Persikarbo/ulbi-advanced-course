import { RouteObject } from "react-router-dom";
import { AboutPage, EmailEditorPage, MainPage } from "pages";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    EMAIL_EDITOR = "emailEditor"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.EMAIL_EDITOR]: "/email-editor"
}

export const appRoutes: RouteObject[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.emailEditor,
        element: <EmailEditorPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]