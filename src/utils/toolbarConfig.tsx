import { PrettyDecentPlaceholders } from 'components/Editor/elements/PrettyDecentPlaceholders';
import React from 'react';
import {
    BiBold,
    BiCode,
    BiComment,
    BiImage,
    BiItalic,
    BiLink,
    BiListOl,
    BiListUl,
    BiPaperclip,
    BiStrikethrough,
    BiTable,
    BiUnderline,
} from 'react-icons/bi';
import { v4 as uuid } from 'uuid';
import { PrettyDecentButtonTypes, PrettyDecentToolbarOption } from '../types';

export type PrettyDecentToolbarConfigOptions = {
    id: string;
    tooltipText: string;
    icon?: React.ReactElement;
    format: PrettyDecentToolbarOption;
    type: PrettyDecentButtonTypes;
    'data-testId': string;
    component?: React.ReactElement;
};

export type PrettyDecentToolbarConfig = {
    [key in PrettyDecentToolbarOption]: PrettyDecentToolbarConfigOptions;
};

export const toolbarConfig: PrettyDecentToolbarConfig = {
    bold: {
        id: uuid(),
        tooltipText: 'Bold',
        icon: <BiBold />,
        format: 'bold',
        type: 'mark',
        'data-testId': 'bold-btn',
    },
    italic: {
        id: uuid(),
        tooltipText: 'Italics',
        icon: <BiItalic />,
        format: 'italic',
        type: 'mark',
        'data-testId': 'italic-btn',
    },
    code: {
        id: uuid(),
        tooltipText: 'Code',
        icon: <BiCode />,
        format: 'code',
        type: 'block',
        'data-testId': 'code-btn',
    },
    underline: {
        id: uuid(),
        tooltipText: 'Underline',
        icon: <BiUnderline />,
        format: 'underline',
        type: 'mark',
        'data-testId': 'underline-btn',
    },
    table: {
        id: uuid(),
        tooltipText: 'Table',
        icon: <BiTable />,
        format: 'table',
        type: 'block',
        'data-testId': 'table-btn',
    },
    'bulleted-list': {
        id: uuid(),
        tooltipText: 'UL',
        icon: <BiListUl />,
        format: 'bulleted-list',
        type: 'block',
        'data-testId': 'ul-btn',
    },
    'numbered-list': {
        id: uuid(),
        tooltipText: 'OL',
        icon: <BiListOl />,
        format: 'numbered-list',
        type: 'block',
        'data-testId': 'ol-btn',
    },
    image: {
        id: uuid(),
        tooltipText: 'Image',
        icon: <BiImage />,
        format: 'image',
        type: 'block',
        'data-testId': 'image-btn',
    },
    attachment: {
        id: uuid(),
        tooltipText: 'Attachment',
        icon: <BiPaperclip />,
        format: 'attachment',
        type: 'block',
        'data-testId': 'attachment-btn',
    },
    'block-quote': {
        id: uuid(),
        tooltipText: 'Quote',
        icon: <BiComment />,
        format: 'block-quote',
        type: 'block',
        'data-testId': 'quote-btn',
    },
    strikethrough: {
        id: uuid(),
        tooltipText: 'Strikethrough',
        icon: <BiStrikethrough />,
        format: 'strikethrough',
        type: 'mark',
        'data-testId': 'strikethrough-btn',
    },
    link: {
        id: uuid(),
        tooltipText: 'Link',
        icon: <BiLink />,
        format: 'link',
        type: 'block',
        'data-testId': 'link-btn',
    },
    block: {
        id: uuid(),
        tooltipText: 'Link',
        icon: <BiLink />,
        format: 'link',
        type: 'block',
        'data-testId': 'link-btn',
    },
    placeholders: {
        id: uuid(),
        tooltipText: 'Link',
        component: <PrettyDecentPlaceholders key={uuid()} />,
        format: 'placeholders',
        type: 'component',
        'data-testId': 'custom-placeholders',
    },
};
