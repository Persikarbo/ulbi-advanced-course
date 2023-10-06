import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import { SimpleImage } from "../lib/customTools";

export const EDITOR_JS_TOOLS = {
  header: Header,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  list: List,
  link: Link,
  image: {
    class: SimpleImage
  }
};