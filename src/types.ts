// TypeScript Users only add this code
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type OrNull<T> = T | null;

export type PrettyDecentBlockTypes =
    | 'attachment'
    | 'paragraph'
    | 'block-quote'
    | 'bulleted-list'
    | 'heading-one'
    | 'heading-two'
    | 'list-item'
    | 'numbered-list'
    | 'paragraph'
    | 'image'
    | 'code'
    | 'table'
    | 'table-row'
    | 'table-col'
    | 'table-cell'
    | 'link'
    | 'heading-three'
    | 'heading-four'
    | 'heading-five'
    | 'heading-six'
    | 'block'
    | 'placeholders';

export type PrettyDecentButtonTypes = 'mark' | 'block' | 'component';
export type PrettyDecentMarkTypes = 'bold' | 'italic' | 'strikethrough' | 'underline';
export type PrettyDecentElementTypes = PrettyDecentBlockTypes | PrettyDecentMarkTypes;

export interface PrettyDecentChildren {
    text?: string;
    marks?: [];
    bold?: boolean;
    italic?: boolean;
    file?: File;
    code?: boolean;
    underline?: boolean;
    url?: string;
    strikethrough?: boolean;
    type?: PrettyDecentElementTypes;
    children?: PrettyDecentChildren[];
}

export type PrettyDecentElement = PrettyDecentChildren;
export type PrettyDecentEditor = BaseEditor &
    ReactEditor & {
        toggleMark: (editor: PrettyDecentEditor, mark: PrettyDecentMarkTypes) => void;
        key: string;
        id: string;
        options: any;
    };
