import { Transforms } from 'slate';
import { PrettyDecentEditor } from 'types';
import { getAbove } from 'utils/getAbove';
import { someNode } from 'utils/someNode';

export const removeCol = (editor: PrettyDecentEditor) => {
    if (
        someNode(editor, {
            match: { type: 'table' },
        })
    ) {
        const currentCellItem = getAbove(editor, {
            match: {
                type: ['table-cell'],
            },
        });
        const currentRowItem = getAbove(editor, {
            match: { type: 'table-row' },
        });
        const currentTableItem = getAbove(editor, {
            match: { type: 'table' },
        });

        if (
            currentCellItem &&
            currentRowItem &&
            currentTableItem &&
            // Cannot delete the last cell
            ((currentRowItem[0] ?? [{ children: [] }])?.children?.length ?? 0) > 1
        ) {
            const currentCellPath = currentCellItem[1];
            const pathToDelete = currentCellPath.slice();
            const replacePathPos = pathToDelete.length - 2;

            currentTableItem[0]?.children?.forEach((row, rowIdx) => {
                pathToDelete[replacePathPos] = rowIdx;

                Transforms.removeNodes(editor, {
                    at: pathToDelete,
                });
            });
        }
    }
};
