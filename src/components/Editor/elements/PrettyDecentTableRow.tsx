import React from 'react';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

export const StyledRow = styled.tr``;

type PrettyDecentTableCellProps = {
    children: React.ReactElement;
};
export const PrettyDecentTableRow = forwardRef(
    ({ children, ...others }: PrettyDecentTableCellProps, ref: ForwardedRef<HTMLTableRowElement>): JSX.Element => {
        return (
            <StyledRow data-type="table-row" {...others} ref={ref}>
                {children}
            </StyledRow>
        );
    },
);

PrettyDecentTableRow.displayName = 'PrettyDecentTableRow';
