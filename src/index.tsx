import React from 'react';
import { PrettyDecentEditorHeart } from 'components/Editor';
import { initialPlaceholders, PrettyDecentPropContextProvider } from 'components/Editor/context/context';
import { PrettyDecentAttachmentContextProvider } from 'components/Editor/elements/PrettyDecentAttachmentList/context';
import { PrettyDecentBlockTypes, PrettyDecentChildren, PrettyDecentElement, PrettyDecentMarkTypes } from 'types';

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

export type PrettyDecentEditorData = {
    children: PrettyDecentChildren[];
    toString: () => string;
    toEncodedString: () => string;
    toHTML: () => string;
};

export type PrettyDecentToolbarOption =
    | Exclude<
          PrettyDecentBlockTypes,
          | 'table-row'
          | 'heading-one'
          | 'heading-two'
          | 'table-row'
          | 'table-col'
          | 'table-cell'
          | 'heading-three'
          | 'heading-four'
          | 'heading-five'
          | 'heading-six'
          | 'paragraph'
          | 'list-item'
      >
    | PrettyDecentMarkTypes;

export type PrettyDecentProps = {
    className?: string;
    /**
     * TODO: Add good docs here
     * toolbarProps are any props used in the maniuplation of the toolbar
     */
    toolbarProps?: {
        options: PrettyDecentToolbarOption[];
    };
    placeholders?: typeof initialPlaceholders;
    themeProps?: PrettyDecentThemeProps;
    onEditorChange?: (newValue: PrettyDecentEditorData) => void;
    initialState?: PrettyDecentElement[] | string;
    renderAttachments?: React.ReactElement;
    onAttachment?: (files: PrettyDecentFile[]) => void;
    onImage?: (file: PrettyDecentFile) => void;
    onAttachmentRemove?: (file: PrettyDecentFile) => Promise<void>;
    placeholder?: string;
    height?: string;
    onSubmit?: () => Promise<void>;
};

export const PrettyDecentEditor = (props: PrettyDecentProps): JSX.Element => (
    <PrettyDecentPropContextProvider>
        <PrettyDecentAttachmentContextProvider>
            <PrettyDecentEditorHeart {...props} />
        </PrettyDecentAttachmentContextProvider>
    </PrettyDecentPropContextProvider>
);

export default PrettyDecentEditor;
