type Mods = Record<string, boolean | string>;

export function classNames(baseClass: string, mods: Mods, additional: string[]): string {
    return [
        baseClass,
        ...additional,
        ...Object.entries(mods)
            .filter(([ mod, value ]) => !!value)
            .map(([ mod ]) => `${baseClass}--${mod}`)
    ].join(" ")
}