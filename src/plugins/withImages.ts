import { PrettyDecentEditor } from 'types';

const withImages = (editor: PrettyDecentEditor) => {
    const { isVoid } = editor;

    editor.isVoid = (element) => (element.type === 'image' ? true : isVoid(element));

    return editor;
};

export default withImages;
