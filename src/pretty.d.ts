import { PrettyDecentChildren, PrettyDecentEditor, PrettyDecentElement } from './types';

declare module 'slate' {
    interface CustomTypes {
        Editor: PrettyDecentEditor;
        Element: PrettyDecentElement;
        Text: PrettyDecentChildren;
    }
}
