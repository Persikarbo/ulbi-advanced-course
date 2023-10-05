import { useState } from "react";
import { WysiwygOnChangeFunction } from "../config/types";

export const useWysiwyg = () => {

    const [data, setData] = useState("");

    const onChange: WysiwygOnChangeFunction = (id, value) => {
        setData(value)
    }

    return {
        data,
        onChange
    }
}