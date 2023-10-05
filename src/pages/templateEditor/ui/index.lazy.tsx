import { lazy } from "react";

export const TemplateEditorLazy = lazy(() => import(/* webpackChunkName: "TemplateEditorPage" */ "./"));