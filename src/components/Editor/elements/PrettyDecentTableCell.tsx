import React from 'react';
import { useCallback } from 'react';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useTableContext } from './PrettyDecentTableBtn/hooks';

export const StyledTd = styled.td`
    min-width: 100px;
    padding: 4px;
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

        const openControls = useCallback(() => {
            setState && setState((ps) => ({ ...ps, openControls: true }));
        }, []);
        return (
            <StyledTd aria-multiline="true" style={{ border }} onClick={openControls} {...others} ref={ref}>
                {children}
            </StyledTd>
        );
    },
);

PrettyDecentTableCell.displayName = 'PrettyDecentTableCell';
