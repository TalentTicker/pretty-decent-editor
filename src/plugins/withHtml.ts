import { Transforms } from 'slate';
import { PrettyDecentChildren, PrettyDecentEditor } from '../pretty';
import { deserialize } from '../utils/deserialize';

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
            Transforms.insertFragment(editor, fragment as PrettyDecentChildren[]);
            return;
        }

        insertData(data);
    };

    return editor;
};
