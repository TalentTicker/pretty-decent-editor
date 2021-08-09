import { Transforms } from 'slate';
import { PrettyDecentEditor } from 'types';
import { getAbove } from 'utils/getAbove';
import { someNode } from 'utils/someNode';

export const deleteTable = (editor: PrettyDecentEditor) => {
    if (
        someNode(editor, {
            match: { type: 'table' },
        })
    ) {
        const tableItem = getAbove(editor, {
            match: { type: 'table' },
        });
        if (tableItem) {
            Transforms.removeNodes(editor, {
                at: tableItem[1],
            });
        }
    }
};
