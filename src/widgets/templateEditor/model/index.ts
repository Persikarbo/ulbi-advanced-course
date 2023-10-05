import {
    TemplateEditorAction,
    TemplateEditorActionType,
    TemplateEditorState
} from "widgets/templateEditor/config/types";
import { getEmailTemplate } from "entities/email";

export interface TemplateEditorModel {
    reducer?(state: TemplateEditorState, action: TemplateEditorAction): TemplateEditorState;
}

export class Model implements TemplateEditorModel {

    static reducer(state: TemplateEditorState, action: TemplateEditorAction) {
        const { type, payload } = action;

        switch (type) {
            case TemplateEditorActionType.SET_BLOCK:
                const blocks = { ...state.blocks, [payload.id]: payload.value };
                return {
                    ...state,
                    blocks,
                    template: getEmailTemplate(blocks)
                }
            default:
                return state
        }
    }
}