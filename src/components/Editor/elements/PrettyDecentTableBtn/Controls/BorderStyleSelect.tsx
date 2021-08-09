import Tippy from '@tippyjs/react';
import { matchCells } from 'plugins/withTables';
import React from 'react';
import { useState } from 'react';
import { BiBorderAll, BiBorderNone } from 'react-icons/bi';
import { Transforms } from 'slate';
import { useSlateStatic } from 'slate-react';
import { StyledBtn } from '../../PrettyDecentButton';
import { useTableContext } from '../hooks';

export const BorderStyleSelect = () => {
    const [active, setActive] = useState(false);
    const editor = useSlateStatic();
    const { setState, state } = useTableContext();
    const toggleBorder = (e: React.MouseEvent) => {
        const border = !state.border ? '1px solid #eee' : 'none';
        e.preventDefault();
        setActive((ps) => !ps);
        setState && setState((ps) => ({ ...ps, border: !ps.border }));
        Transforms.setNodes(
            editor,
            {
                border,
            },
            {
                match: matchCells,
                at: [],
            },
        );
    };
    return (
        <Tippy placement="top" content="Toggle Border">
            <StyledBtn active={active} onClick={toggleBorder}>
                {!active ? <BiBorderNone /> : <BiBorderAll />}
            </StyledBtn>
        </Tippy>
    );
};
