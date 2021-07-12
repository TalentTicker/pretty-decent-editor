import { useSlateStatic } from 'slate-react';

export const usePrettyDecentEditor = () => {
    const editor = useSlateStatic();

    return editor;
};
