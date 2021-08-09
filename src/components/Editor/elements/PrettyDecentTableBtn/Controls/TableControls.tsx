import React from 'react';
import { useRef } from 'react';
import { PortalWithState } from 'react-portal';
import styled from 'styled-components';
import { useTableContext } from '../hooks';
import { AddColumn } from './AddColumn';
import { AddRow } from './AddRow';
import { BorderStyleSelect } from './BorderStyleSelect';
import { RemoveCol } from './RemoveCol';
import { RemoveRow } from './RemoveRow';
import { RemoveTable } from './RemoveTable';

const ControlBar = styled.div`
    height: 50px;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    /* width: 300px; */
    position: absolute;
    top: 10px;
    background: white;
    z-index: 3;
    display: flex;
    align-items: center;
    left: calc(50% - 150px);
    margin: 0 auto;
`;

export const TableControls = (): JSX.Element => {
    const ref = useRef(null);
    const { state } = useTableContext();
    return (
        <PortalWithState defaultOpen node={ref.current}>
            {() =>
                state.openControls && (
                    <ControlBar>
                        <BorderStyleSelect />
                        <AddColumn />
                        <RemoveCol />
                        <AddRow />
                        <RemoveRow />
                        <RemoveTable />
                    </ControlBar>
                )
            }
        </PortalWithState>
    );
};
