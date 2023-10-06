import { FC, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib";
import styles from "./WysiwygJs.module.pcss";
import { ComponentProps } from "shared/types";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../config/tools";
import { EditorJsOnChangeFunction } from "../config/types";

interface WysiwygJsProps extends ComponentProps {
    id: string;
    data?: OutputData;
    onChange?: EditorJsOnChangeFunction;
}

const defaultProps = {
    data: {
        time: new Date().getTime(),
        blocks: [
            {
                type: "paragraph",
                data: {}
            }
        ]
    }
}

export const WysiwygJs: FC<WysiwygJsProps> = (props) => {

    const {
        className,
        children,
        id,
        data,
        onChange,
        ...restProps
    } = props;

    const ref = useRef<EditorJS>(null);

    useEffect(() => {
        if (!ref.current) {
            ref.current = new EditorJS({
                holder: id,
                tools: EDITOR_JS_TOOLS,
                data,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    if (typeof onChange === "function") {
                        onChange(id, data);
                    }
                },
            });
        }

        if (data && typeof onChange === "function") {
            onChange(id, data);
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);

    return (
        <div className={classNames(styles.wysiwygJs, {}, [ className ])}
             id={id}
             {...restProps}
        />
    );
};

WysiwygJs.defaultProps = defaultProps;