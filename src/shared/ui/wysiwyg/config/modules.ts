import { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";

Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageResize', ImageResize)

type ReactQuillModules = {
    [key: string]: any
}

export const modules: ReactQuillModules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
        ],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false
    },
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: [ 'Resize', 'DisplaySize' ]
    },
    blotFormatter: {}
};