import React, { createContext } from 'react';
import { useState } from 'react';

export type TableContextType = {
    state: TableState;
    setState: React.Dispatch<React.SetStateAction<TableState>> | undefined;
};

type TableState = {
    border: boolean;
    borderStyle?: string;
    openControls: boolean;
};

const initialContext = {
    state: {
        border: true,
        openControls: false,
    },
    setState: undefined,
};
export const TableContext = createContext<TableContextType>(initialContext);

export const TableContextProvider = ({ children }: { children: React.ReactElement }): JSX.Element => {
    const [state, setState] = useState<TableState>({
        border: true,
        openControls: false,
    });
    return <TableContext.Provider value={{ state, setState }}>{children}</TableContext.Provider>;
};
