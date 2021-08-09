import Tippy from '@tippyjs/react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useSlateStatic } from 'slate-react';
import { StyledBtn } from '../../PrettyDecentButton';
import { useTableContext } from '../hooks';
import { deleteTable } from '../transforms/deleteTable';

export const RemoveTable = (): JSX.Element => {
    const { setState } = useTableContext();
    const editor = useSlateStatic();
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        deleteTable(editor);
        setState && setState((ps) => ({ ...ps, openControls: false }));
    };
    return (
        <Tippy placement="top" content="Remove Table">
            <StyledBtn active={false} onClick={handleClick}>
                <IoMdClose />
            </StyledBtn>
        </Tippy>
    );
};
