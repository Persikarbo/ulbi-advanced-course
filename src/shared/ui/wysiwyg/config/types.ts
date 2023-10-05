import { DeltaStatic, Sources } from "quill";
import { UnprivilegedEditor } from "react-quill";

export type WysiwygOnChangeFunction = (id: string, value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void;