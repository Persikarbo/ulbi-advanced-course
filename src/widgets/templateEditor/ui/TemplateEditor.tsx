import React, { FC, useEffect, useReducer, useState } from "react";
import { ComponentProps } from "shared/types";
import { classNames } from "shared/lib";
import styles from "./TemplateEditor.module.pcss";
import { Wysiwyg, WysiwygOnChangeFunction } from "shared/ui/wysiwyg";
import { Preview } from "shared/ui/preview";
import { Grid, GridItem } from "shared/ui/grid";
import { Model } from "../model";
import { TemplateEditorActionType } from "../config/types";
import { Tabs, TabsItem } from "shared/ui/tabs";
import { RoutePath } from "shared/config/routes";
import { convertEditorDataToHTML, EditorJsOnChangeFunction, WysiwygJs } from "shared/ui/wysiwygJs";
import ExampleImage from "@assets/images/b363356f.jpg";

export const TemplateEditor: FC<ComponentProps> = (props) => {

    const {
        className
    } = props;

    const [ isSanitizerEnabled, setIsSanitizerEnabled ] = useState(true);
    const [ state, dispatch ] = useReducer(Model.reducer, {
        blocks: { body: "" },
        template: "No preview"
    })

    const onChange: WysiwygOnChangeFunction = (id, value, delta, source) => {
        if (source !== "user") return;
        dispatch({ type: TemplateEditorActionType.SET_BLOCK, payload: { id, value } })
    }

    const onChangeJs: EditorJsOnChangeFunction = (id, data) => {
        if (!data.blocks.length) return;
        dispatch({ type: TemplateEditorActionType.SET_BLOCK, payload: { id, value: convertEditorDataToHTML(data.blocks) } })
    }

    return (
        <div className={classNames(styles.templateEditor, {}, [ className ])}>
            <label className={"mb-3"}>
                <input id="enable-sanitizer"
                       type={"checkbox"}
                       checked={isSanitizerEnabled}
                       onChange={({ target }) => setIsSanitizerEnabled(target.checked)} />
                <span>Включить санитайзер</span>
            </label>
            <Grid columns={2}>
                <GridItem>
                    <Tabs routePath={RoutePath.templateEditor}>
                        <TabsItem title={"Контент (вер. 1)"}>
                            <Wysiwyg id={"body"} value={state.blocks.body} onChange={onChange} />
                        </TabsItem>
                        <TabsItem title={"Шапка (вер. 2)"} path={"/header"}>
                            <WysiwygJs id={"header"} onChange={onChangeJs} data={{
                                time: new Date().getTime(),
                                blocks: [
                                    {
                                        type: "paragraph",
                                        data: {
                                            text: `Image URL example: http://${window.location.host}${ExampleImage}`
                                        }
                                    }
                                ]
                            }}/>
                        </TabsItem>
                    </Tabs>
                </GridItem>
                <GridItem>
                    <Preview html={state.template} isSanitizerEnabled={isSanitizerEnabled} />
                </GridItem>
            </Grid>
        </div>
    )
}