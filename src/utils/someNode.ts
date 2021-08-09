import { PrettyDecentEditor, PrettyDecentElement } from 'types';
import { findNode, FindNodeOptions } from './findNode';

export const someNode = <T extends PrettyDecentElement = PrettyDecentElement>(
    editor: PrettyDecentEditor,
    options: FindNodeOptions<T>,
) => {
    return !!findNode<T>(editor, options);
};
