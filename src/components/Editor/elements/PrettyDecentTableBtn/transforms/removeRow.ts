import { Transforms } from 'slate';
import { PrettyDecentEditor } from 'types';
import { getAbove } from 'utils/getAbove';
import { someNode } from 'utils/someNode';

export const deleteRow = (editor: PrettyDecentEditor) => {
    if (
        someNode(editor, {
            match: { type: 'table' },
        })
    ) {
        const currentTableItem = getAbove(editor, {
            match: { type: 'table' },
        });
        const currentRowItem = getAbove(editor, {
            match: { type: 'table-row' },
        });
        if (
            currentRowItem &&
            currentTableItem &&
            // Cannot delete the last row
            (currentTableItem[0]?.children?.length ?? [{ children: [] }]) > 1
        ) {
            Transforms.removeNodes(editor, {
                at: currentRowItem[1],
            });
        }
    }
};
