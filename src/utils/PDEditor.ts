import { Editor } from 'slate';
import { ReactEditor } from 'slate-react';
import { PrettyDecentEditor } from '../pretty';
import * as editorUtils from '../utils/editorUtils';

//@ts-ignore
export const PDEditor: PrettyDecentEditor = {
    ...ReactEditor,
    ...Editor,
    ...editorUtils,
};
