import React from 'react';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { StyledBtn } from '../../PrettyDecentButton';
import { BiBorderBottom } from 'react-icons/bi';
import { useSlateStatic } from 'slate-react';
import { addRow } from '../transforms/addRow';

export const AddRow = () => {
    const [active, setActive] = useState(false);
    const editor = useSlateStatic();
    const addCol = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive((ps) => !ps);
        addRow(editor);
    };
    return (
        <Tippy placement="top" content="Add Row">
            <StyledBtn active={active} onClick={addCol}>
                <BiBorderBottom />
            </StyledBtn>
        </Tippy>
    );
};
