import Tippy from '@tippyjs/react';
import React from 'react';
import { useState } from 'react';
import { BiBorderAll, BiBorderNone } from 'react-icons/bi';
import { StyledBtn } from '../../PrettyDecentButton';
import { useTableContext } from '../hooks';

export const BorderStyleSelect = () => {
    const [active, setActive] = useState(false);
    const { setState } = useTableContext();
    const toggleBorder = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive((ps) => !ps);
        setState && setState((ps) => ({ ...ps, border: !ps.border }));
    };
    return (
        <Tippy placement="top" content="Toggle Border">
            <StyledBtn active={active} onClick={toggleBorder}>
                {!active ? <BiBorderNone /> : <BiBorderAll />}
            </StyledBtn>
        </Tippy>
    );
};
