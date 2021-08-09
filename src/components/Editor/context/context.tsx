import React from 'react';
import { createContext, useReducer } from 'react';
import { PrettyDecentProps } from 'index';

export type PrettyDecentPropContextType = PrettyDecentProps & {
    dispatch: React.Dispatch<PrettyDecentReducerActions> | undefined;
};

export const initialPlaceholders = [
    { key: 'firstname', value: '$firstname', text: 'First Name' },
    { key: 'lastname', value: '$lastname', text: 'Last Name' },
    { key: 'company', value: '$company', text: 'Company' },
    { key: 'email', value: '$email', text: 'Email' },
];

const initialContext: PrettyDecentPropContextType = {
    toolbarProps: {
        options: [
            'bold',
            'italic',
            'underline',
            'code',
            'block-quote',
            'table',
            'link',
            'numbered-list',
            'bulleted-list',
            'strikethrough',
            'attachment',
            'image',
            'placeholders',
        ],
    },
    placeholders: initialPlaceholders,
    themeProps: {
        colors: {
            primary: '#EF7436',
            secondary: '#000',
        },
    },
    dispatch: undefined,
};

type PrettyDecentReducerActions = { type: 'UPDATE'; payload: Partial<PrettyDecentPropContextType> };

export const PrettyDecentPropContext = createContext<PrettyDecentPropContextType>(initialContext);

export const reducer = (state: PrettyDecentProps, action: PrettyDecentReducerActions): PrettyDecentProps => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const PrettyDecentPropContextProvider = ({ children }: { children: React.ReactElement }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialContext);

    return (
        <PrettyDecentPropContext.Provider value={{ ...state, dispatch }}>{children}</PrettyDecentPropContext.Provider>
    );
};
