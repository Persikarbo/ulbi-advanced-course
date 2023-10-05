import { RouteObject } from "react-router-dom";
import { AboutPage, TemplateEditorPage, MainPage } from "pages";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    TEMPLATE_EDITOR = "templateEditor"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.TEMPLATE_EDITOR]: "/template-editor"
}

export const appRoutes: RouteObject[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: `${RoutePath.templateEditor}/*`,
        element: <TemplateEditorPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]