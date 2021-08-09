import React from 'react';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { StyledBtn } from '../../PrettyDecentButton';
import { BiBorderLeft } from 'react-icons/bi';
import { useSlateStatic } from 'slate-react';
import { removeCol } from '../transforms/removeCol';

export const RemoveCol = () => {
    const [active, setActive] = useState(false);
    const editor = useSlateStatic();
    const addCol = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive((ps) => !ps);
        removeCol(editor);
    };
    return (
        <Tippy placement="top" content="Remove Column">
            <StyledBtn active={active} onClick={addCol}>
                <BiBorderLeft />
            </StyledBtn>
        </Tippy>
    );
};
