import { PrettyDecentEditorChangeDTO, PrettyDecentElement, PrettyDecentFile, PrettyDecentToolbarOption } from 'types';

export type PrettyDecentThemeProps = {
    colors: {
        primary: string;
        secondary: string;
    };
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
    initialState?: PrettyDecentElement[];
    renderAttachments?: React.ReactElement;
    onAttachment?: (files: PrettyDecentFile[]) => void;
    onImage?: (file: PrettyDecentFile) => void;
    onAttachmentRemove?: (file: PrettyDecentFile) => Promise<void>;
    placeholder?: string;
};
