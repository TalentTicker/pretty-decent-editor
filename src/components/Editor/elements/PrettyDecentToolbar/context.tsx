import { useMobile } from 'hooks/useMobile';
import React, { createContext, useState } from 'react';

export type PrettyDecentToolbarContextType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initContext = {
    open: true,
    setOpen: () => undefined,
};

export const PrettyDecentToolbarContext = createContext<PrettyDecentToolbarContextType>(initContext);

type PrettyDecentToolbarContextProviderProps = {
    children: React.ReactElement;
};
export const PrettyDecentToolbarContextProvider = ({
    children,
}: PrettyDecentToolbarContextProviderProps): JSX.Element => {
    const [open, setOpen] = useState(true);

    return (
        <PrettyDecentToolbarContext.Provider value={{ open, setOpen }}>{children}</PrettyDecentToolbarContext.Provider>
    );
};
