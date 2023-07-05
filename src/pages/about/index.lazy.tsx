import { lazy } from "react";

export const AboutLazy = lazy(() => import(/* webpackChunkName: "aboutPage" */ "./"));