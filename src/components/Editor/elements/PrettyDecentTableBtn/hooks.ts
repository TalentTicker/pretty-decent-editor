import { useContext } from 'react';
import { TableContext, TableContextType } from './context';

export const useTableContext = (): TableContextType => {
    const { state, setState } = useContext(TableContext);
    return {
        state,
        setState,
    };
};
