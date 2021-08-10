import { Path, Transforms } from 'slate';
import { PrettyDecentEditor } from 'types';
import { getAbove } from 'utils/getAbove';
import { someNode } from 'utils/someNode';

export const addRow = (editor: PrettyDecentEditor) => {
    if (
        someNode(editor, {
            match: { type: 'table' },
        })
    ) {
        const currentRowItem = getAbove(editor, {
            match: { type: 'table-row' },
        });
        if (currentRowItem) {
            const [currentRowElem, currentRowPath] = currentRowItem;
            Transforms.insertNodes<PrettyDecentEditor>(
                editor,
                [
                    {
                        type: 'table-row',
                        children: Array.from({ length: currentRowElem?.children?.length ?? 0 }, () => ({
                            type: 'table-cell',
                            children: [{ type: 'paragraph', children: [{ text: '' }] }],
                        })),
                    },
                ],
                {
                    at: Path.next(currentRowPath),
                    select: true,
                },
            );
        }
    }
};
