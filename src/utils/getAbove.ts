import { EditorAboveOptions } from 'index';
import { Editor } from 'slate';
import { PrettyDecentEditor, PrettyDecentElement } from 'types';
import { getQueryOptions } from './match';

/**
 * Get node above a location (default: selection).
 */
export const getAbove = <T extends PrettyDecentElement = PrettyDecentElement>(
    editor: PrettyDecentEditor,
    options: EditorAboveOptions<T> = {},
) => {
    return Editor.above<T>(editor, getQueryOptions(editor, options));
};
