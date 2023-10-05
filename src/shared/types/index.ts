import { ReactNode } from "react";

export interface ComponentProps {
    className?: string,
    mods?: Record<string, boolean | string>
}