import { Path, Transforms } from 'slate';
import { PrettyDecentEditor, PrettyDecentElement } from 'types';
import { getAbove } from 'utils/getAbove';
import { someNode } from 'utils/someNode';

export const addColumn = (editor: PrettyDecentEditor) => {
    if (
        someNode(editor, {
            //@ts-ignore
            match: { type: 'table' },
        })
    ) {
        const currentCellItem = getAbove(editor, {
            match: {
                type: ['table-cell'],
            },
        });

        const currentTableItem = getAbove(editor, {
            match: { type: 'table' },
        });

        if (currentCellItem && currentTableItem) {
            const nextCellPath = Path.next(currentCellItem[1]);
            const newCellPath = nextCellPath.slice();
            const replacePathPos = newCellPath.length - 2;
            const currentRowIdx = nextCellPath[replacePathPos];

            currentTableItem[0]?.children?.forEach((row, rowIdx) => {
                newCellPath[replacePathPos] = rowIdx;

                Transforms.insertNodes<PrettyDecentElement>(
                    editor,
                    [{ type: 'table-cell', children: [{ text: '' }] }],
                    {
                        at: newCellPath,
                        select: rowIdx === currentRowIdx,
                    },
                );
            });
        }
    }
};
