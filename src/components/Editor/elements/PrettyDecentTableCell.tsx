import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { BORDER_STYLE } from './PrettyDecentTableBtn/constants';
import { useTableContext } from './PrettyDecentTableBtn/hooks';

export const StyledTd = styled.td`
    min-width: 100px;
    padding: 4px;
    min-height: 20px;
    border: ${BORDER_STYLE};
`;

type PrettyDecentTableCellProps = {
    children: React.ReactElement;
    border?: string;
};
export const PrettyDecentTableCell = forwardRef(
    (
        { children, border, ...others }: PrettyDecentTableCellProps,
        ref: ForwardedRef<HTMLTableCellElement>,
    ): JSX.Element => {
        const { state, setState } = useTableContext();
        const openControls = useCallback(() => {
            setState && setState((ps) => ({ ...ps, openControls: true }));
        }, []);

        useEffect(() => {
            if (border) {
                setState && setState((ps) => ({ ...ps, borderStyle: border }));
            }
        }, [border]);
        return (
            <StyledTd
                style={{ lineHeight: 0.5, border: state.borderStyle }}
                onClick={openControls}
                ref={ref}
                {...others}
            >
                {children}
            </StyledTd>
        );
    },
);

PrettyDecentTableCell.displayName = 'PrettyDecentTableCell';
