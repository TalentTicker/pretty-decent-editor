import { Editor, Node, Path, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { PrettyDecentChildren, PrettyDecentEditor } from '../../../../types';

export const insertImage = (editor: PrettyDecentEditor, file: string): void => {
    const { selection } = editor;
    const image = [
        { type: 'paragraph', children: [{ text: '' }] },
        { type: 'image', url: file, children: [{ text: '' }] },
        { type: 'paragraph', children: [{ text: '' }] },
    ] as PrettyDecentChildren;

    ReactEditor.focus(editor);

    if (!!selection) {
        const [parentNode, parentPath] = Editor.parent(editor, selection.focus?.path);

        if (editor.isVoid(parentNode as PrettyDecentChildren) || Node.string(parentNode).length) {
            // Insert the new image node after the void node or a node with content
            Transforms.insertNodes(editor, image, {
                at: Path.next(parentPath),
                select: true,
            });
        } else {
            // If the node is empty, replace it instead
            Transforms.removeNodes(editor, { at: parentPath });
            Transforms.insertNodes(editor, image, { at: parentPath, select: true });
        }
    } else {
        // Insert the new image node at the bottom of the Editor when selection
        // is falsey
        Transforms.insertNodes(editor, image, { select: false, voids: true });
    }
};
