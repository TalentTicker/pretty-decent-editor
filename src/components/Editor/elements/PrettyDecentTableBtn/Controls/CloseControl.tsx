import Tippy from '@tippyjs/react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { StyledBtn } from '../../PrettyDecentButton';
import { useTableContext } from '../hooks';

type CloseControlsProps = {
    closeFn: () => void;
};
export const CloseControls = ({ closeFn }: CloseControlsProps) => {
    const { setState } = useTableContext();
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        closeFn();
        setState && setState((ps) => ({ ...ps, openControls: false }));
    };
    return (
        <Tippy placement="top" content="Close Controls">
            <StyledBtn active={false} onClick={handleClick}>
                <IoMdClose />
            </StyledBtn>
        </Tippy>
    );
};
