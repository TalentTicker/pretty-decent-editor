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
        const cellRef = useThreadedRef<HTMLTableCellElement>(ref);
        const openControls = useCallback(() => {
            setState && setState((ps) => ({ ...ps, openControls: true }));
        }, []);
        useEffect(() => {
            setState && setState((ps) => ({ ...ps, borderStyle: cellRef?.current?.style.border }));
        }, [cellRef]);
        return (
            <StyledTd
                //@ts-ignore
                style={{ lineHeight: 0.5, border: state.borderStyle }}
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
