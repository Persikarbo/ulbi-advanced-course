import { EmailTemplateBlocks } from "entities/email";

enum TemplateEditorActionType {
    SET_BLOCK = "SET_BLOCK"
}

type TemplateEditorPayload = {
    id: string,
    value: string
}

type TemplateEditorAction = {
    type: TemplateEditorActionType;
    payload: TemplateEditorPayload;
}

type TemplateEditorState = {
    blocks: EmailTemplateBlocks;
};

export {
    TemplateEditorActionType,
    TemplateEditorAction,
    TemplateEditorState
}