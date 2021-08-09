import React from 'react';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { StyledBtn } from '../../PrettyDecentButton';
import { BiBorderTop } from 'react-icons/bi';
import { useSlateStatic } from 'slate-react';
import { deleteRow } from '../transforms/removeRow';

export const RemoveRow = () => {
    const [active, setActive] = useState(false);
    const editor = useSlateStatic();
    const addCol = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive((ps) => !ps);
        deleteRow(editor);
    };
    return (
        <Tippy placement="top" content="Remove Row">
            <StyledBtn active={active} onClick={addCol}>
                <BiBorderTop />
            </StyledBtn>
        </Tippy>
    );
};
