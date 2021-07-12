import { Transforms } from 'slate';
import { useSlateStatic } from 'slate-react';
import { PrettyDecentChildren } from 'types';

export const usePrettyDecentEditor = () => {
    const editor = useSlateStatic();
    const resetCursor = (element: PrettyDecentChildren) => {
        // Transforms.select(editor, {
        //     anchor: { path: [0, 0], offset: 0 },
        //     focus: { path: [1, 0], offset: 2 },
        // });
    };
    return { resetCursor };
};
