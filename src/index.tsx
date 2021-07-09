import React from 'react';
import { PrettyDecentEditorHeart } from 'components/Editor';
import { PrettyDecentPropContextProvider } from 'components/Editor/context/context';
import { PrettyDecentAttachmentContextProvider } from 'components/Editor/elements/PrettyDecentAttachmentList/context';
import { PrettyDecentEditorChangeDTO, PrettyDecentElement, PrettyDecentToolbarOption } from 'types';

export type PrettyDecentThemeProps = {
    colors: {
        primary: string;
        secondary: string;
    };
};

export type PrettyDecentFile = {
    id: string;
    file: File;
    encodedUrl: string | ArrayBuffer | null;
};

export type PrettyDecentProps = {
    className?: string;
    /**
     * TODO: Add good docs here
     * toolbarProps are any props used in the maniuplation of the toolbar
     */
    toolbarProps?: {
        options: PrettyDecentToolbarOption[];
    };
    themeProps?: PrettyDecentThemeProps;
    onEditorChange?: (newValue: PrettyDecentEditorChangeDTO) => void;
    initialState?: PrettyDecentElement[] | string;
    renderAttachments?: React.ReactElement;
    onAttachment?: (files: PrettyDecentFile[]) => void;
    onImage?: (file: PrettyDecentFile) => void;
    onAttachmentRemove?: (file: PrettyDecentFile) => Promise<void>;
    placeholder?: string;
};

export const PrettyDecentEditor = (props: PrettyDecentProps): JSX.Element => (
    <PrettyDecentPropContextProvider>
        <PrettyDecentAttachmentContextProvider>
            <PrettyDecentEditorHeart {...props} />
        </PrettyDecentAttachmentContextProvider>
    </PrettyDecentPropContextProvider>
);

export default PrettyDecentEditor;
