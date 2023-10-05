import React, { FC, useEffect, useReducer, useState } from "react";
import { ComponentProps } from "shared/types";
import { classNames } from "shared/lib";
import styles from "./TemplateEditor.module.pcss";
import { Wysiwyg, WysiwygOnChangeFunction } from "shared/ui/wysiwyg";
import { Preview } from "shared/ui/preview";
import { Grid, GridItem } from "shared/ui/grid";
import { Model } from "../model";
import { TemplateEditorActionType } from "widgets/templateEditor/config/types";
import { getEmailTemplate } from "entities/email";

export const TemplateEditor: FC<ComponentProps> = (props) => {

    const {
        className
    } = props;

    const [ state, dispatch ] = useReducer(Model.reducer, { blocks: { body: "" } })
    const [ template, setTemplate ] = useState("");

    const onChange: WysiwygOnChangeFunction = (id, value) => {
        dispatch({ type: TemplateEditorActionType.SET_BLOCK, payload: { id, value } })
    }

    useEffect(() => {
        setTemplate(getEmailTemplate(state.blocks))
    }, [ state ])

    const [ isSanitizerEnabled, setIsSanitizerEnabled ] = useState(true);

    return (
        <div className={classNames(styles.templateEditor, {}, [ className ])}>
            <label>
                <input id="enable-sanitizer"
                       type={"checkbox"}
                       checked={isSanitizerEnabled}
                       onChange={({ target }) => setIsSanitizerEnabled(target.checked)} />
                <span>Включить санитайзер</span>
            </label>
            <Grid columns={2}>
                <GridItem>
                    <Wysiwyg id={"header"} value={state.blocks.header} onChange={onChange} />
                </GridItem>
                <GridItem>
                    <Preview html={template} isSanitizerEnabled={isSanitizerEnabled} />
                </GridItem>
            </Grid>
        </div>
    )
}