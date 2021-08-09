import React from 'react';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { StyledBtn } from '../../PrettyDecentButton';
import { BiBorderRight } from 'react-icons/bi';
import { addColumn } from '../transforms/addCol';
import { useSlateStatic } from 'slate-react';

export const AddColumn = () => {
    const [active, setActive] = useState(false);
    const editor = useSlateStatic();
    const addCol = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive((ps) => !ps);
        addColumn(editor);
    };
    return (
        <Tippy placement="top" content="Add Column">
            <StyledBtn active={active} onClick={addCol}>
                <BiBorderRight />
            </StyledBtn>
        </Tippy>
    );
};
