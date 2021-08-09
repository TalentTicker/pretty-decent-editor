import { matchCells } from 'plugins/withTables';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ForwardedRef, forwardRef } from 'react';
import { Editor, Transforms } from 'slate';
import { useSlateStatic } from 'slate-react';
import styled from 'styled-components';
import { useThreadedRef } from 'utils/useThreadedRef';
import { useTableContext } from './PrettyDecentTableBtn/hooks';

export const StyledTd = styled.td`
    min-width: 100px;
    padding: 4px;
    min-height: 20px;
    /* flex-direction: column; */
    /* height: 75px; */
    /* border: 1px solid #eee; */
    /* border: none; */
`;

type PrettyDecentTableCellProps = {
    children: React.ReactElement;
};
export const PrettyDecentTableCell = forwardRef(
    ({ children, ...others }: PrettyDecentTableCellProps, ref: ForwardedRef<HTMLTableCellElement>): JSX.Element => {
        const { state, setState } = useTableContext();
        const border = state.border ? '1px solid #eee' : 'none';
        const [borderState, setBorderState] = useState(border);

        const cellRef = useThreadedRef<HTMLTableCellElement>(ref);
        const openControls = useCallback(() => {
            setState && setState((ps) => ({ ...ps, openControls: true }));
        }, []);

        useEffect(() => {
            const newBorder = cellRef.current?.style.border ?? state.border ? border : 'none';
            setBorderState(newBorder);
            setState && setState((ps) => ({ ...ps, borderStyle: newBorder }));
        }, [cellRef, state.border]);

        return (
            <StyledTd
                //@ts-ignore
                style={{ lineHeight: 0.5, border: borderState }}
                onClick={openControls}
                {...others}
                ref={cellRef}
            >
                {children}
            </StyledTd>
        );
    },
);

PrettyDecentTableCell.displayName = 'PrettyDecentTableCell';
