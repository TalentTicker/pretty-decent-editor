import { Transforms } from 'slate';
import { PrettyDecentChildren, PrettyDecentEditor, PrettyDecentElement } from '../types';
import { deserialize, wrapTopLevelInlineNodesInParagraphs } from '../utils/deserialize';

export const withHtml = (editor: PrettyDecentEditor): PrettyDecentEditor => {
    const { insertData, isInline, isVoid } = editor;

    editor.isInline = (element) => {
        return element.type === 'link' ? true : isInline(element);
    };
    editor.isVoid = (element) => {
        return element.type === 'image' ? true : isVoid(element);
    };

    editor.insertData = (data) => {
        const html = data.getData('text/html');
        if (html) {
            const parsed = new DOMParser().parseFromString(html, 'text/html');
            const fragment = deserialize(parsed.body);
            let fragmentWithOnlyBlocks = fragment;
            if (Array.isArray(fragment)) {
                fragmentWithOnlyBlocks = wrapTopLevelInlineNodesInParagraphs(editor, fragment as PrettyDecentElement[]);
            }
            Transforms.insertFragment(editor, fragmentWithOnlyBlocks as PrettyDecentChildren[]);
            return;
        }
        insertData(data);
    };

    return editor;
};
