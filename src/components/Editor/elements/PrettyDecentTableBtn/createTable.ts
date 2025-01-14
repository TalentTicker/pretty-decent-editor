import { isBlockActive } from 'components/Editor/elements/PrettyDecentButton';
import { Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { PrettyDecentChildren, PrettyDecentEditor, PrettyDecentElement } from '../../../../types';

type CreateTableProps = {
    editor: PrettyDecentEditor;
    cols: number;
    rows: number;
    border: string;
};

export const createTable = ({ editor, cols, rows, border }: CreateTableProps): void => {
    const isActive = isBlockActive(editor, 'table');
    // create Table Node
    const rowData = Array.from({ length: rows }, () => ({
        type: 'table-row',
        children: Array.from({ length: cols }, () => ({
            type: 'table-cell',
            style: {
                border,
            },
            children: [{ type: 'block', children: [{ type: 'paragraph', children: [{ text: '' }] }] }],
        })),
    })) as PrettyDecentChildren[];

    const table: PrettyDecentElement = {
        type: 'table',
        children: rowData,
    };
    if (isActive) {
        Transforms.insertNodes(editor, [table, { type: 'paragraph', children: [{ text: '' }] }]);
    } else {
        ReactEditor.focus(editor);
        Transforms.insertNodes(editor, table);
    }
};
