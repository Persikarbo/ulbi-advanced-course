import {
    TemplateEditorAction,
    TemplateEditorActionType,
    TemplateEditorState
} from "widgets/templateEditor/config/types";

export interface TemplateEditorModel {
    reducer?(state: TemplateEditorState, action: TemplateEditorAction): TemplateEditorState;
}

export class Model implements TemplateEditorModel {

    static reducer(state: TemplateEditorState, action: TemplateEditorAction) {
        const { type, payload } = action;

        switch (type) {
            case TemplateEditorActionType.SET_BLOCK:
                return { ...state, blocks: { ...state.blocks, [payload.id]: payload.value } }
        }
    }
}