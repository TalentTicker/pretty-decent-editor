import React from 'react';
import { useRef } from 'react';
import { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';
import { TableControls } from './PrettyDecentTableBtn/Controls/TableControls';
import { useTableContext } from './PrettyDecentTableBtn/hooks';

type PrettyDecentTableProps = React.HTMLAttributes<HTMLTableElement> & {
    children: React.ReactElement;
};

export const PrettyDecentTable = forwardRef(
    ({ children, ...others }: PrettyDecentTableProps, ref: ForwardedRef<HTMLTableElement>) => {
        const { setState } = useTableContext();
        const tableRef = useRef<HTMLTableElement>(null);
        useClickAway(tableRef, () => {
            setState && setState((ps) => ({ ...ps, openControls: false }));
        });

        return (
            <div ref={tableRef}>
                <TableControls />
                <StyledTable data-testid="pd-table" data-type="table" ref={ref} {...others}>
                    <tbody>{children}</tbody>
                </StyledTable>
            </div>
        );
    },
);

PrettyDecentTable.displayName = 'PrettyDecentTable';

const StyledTable = styled.table`
    border-collapse: collapse;
    border: none;
`;
