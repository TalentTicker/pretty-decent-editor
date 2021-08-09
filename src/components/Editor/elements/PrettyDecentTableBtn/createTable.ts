import { isBlockActive } from 'components/Editor/elements/PrettyDecentButton';
import { Transforms } from 'slate';
import { jsx } from 'slate-hyperscript';
import { ReactEditor } from 'slate-react';
import { PrettyDecentChildren, PrettyDecentEditor, PrettyDecentElement } from '../../../../types';

type CreateTableProps = {
    editor: PrettyDecentEditor;
    cols: number;
    rows: number;
};

export const createTable = ({ editor, cols, rows }: CreateTableProps): void => {
    const isActive = isBlockActive(editor, 'table');
    // create Table Node
    const rowData = Array.from({ length: rows }, () => ({
        type: 'table-row',
        children: Array.from({ length: cols }, () => ({
            type: 'table-cell',
            children: [{ type: 'paragraph', children: [{ text: '' }] }],
        })),
    })) as PrettyDecentChildren[];

    const table: PrettyDecentElement = {
        type: 'table',
        children: rowData,
    };
    if (isActive) {
        Transforms.insertNodes(editor, jsx('element', undefined, [{ type: 'block', children: [{ text: '' }] }]));
    } else {
        ReactEditor.focus(editor);
        Transforms.insertNodes(editor, table);
    }
};
