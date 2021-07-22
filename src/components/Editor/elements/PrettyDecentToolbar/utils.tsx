import React from 'react';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
import { PrettyDecentButtonTypes } from '../../../../types';
import { PrettyDecentTableBtn } from '../PrettyDecentTableBtn';
import { PrettyDecentAttachment } from '../PrettyDecentAttachment';
import { PrettyDecentImageBtn } from '../PrettyDecentImages/PrettyDecentImageBtn';
import { PrettyDecentButton } from '../PrettyDecentButton';
import { PrettyDecentLinkBtn } from '../PrettyDecentLink/PrettyDecentLinkBtn';

export const generateButtonGroups = (
    options: PrettyDecentToolbarConfigOptions[],
    type: PrettyDecentButtonTypes,
): Partial<PrettyDecentToolbarConfigOptions[]> => {
    return options.reduce(
        (acc, curr) => (curr.type === type ? [...acc, curr] : [...acc]),
        [] as Partial<PrettyDecentToolbarConfigOptions[]>,
    );
};
export const generateBtnProps = (option: PrettyDecentToolbarConfigOptions) => ({
    tooltipProps: {
        content: option.tooltipText,
    },
    format: option.format,
    type: option.type,
    'data-testid': option['data-testId'],
});

export const generateButtons = (
    option: PrettyDecentToolbarConfigOptions,
    props: ReturnType<typeof generateBtnProps>,
): JSX.Element => {
    switch (option.format) {
        case 'table':
            return (
                <PrettyDecentTableBtn key={`toolbar-option-${option?.id}`} {...props}>
                    {option?.icon ?? null}
                </PrettyDecentTableBtn>
            );

        case 'attachment':
            return (
                <PrettyDecentAttachment key={`toolbar-option-${option?.id}`} {...props}>
                    {option?.icon ?? null}
                </PrettyDecentAttachment>
            );

        case 'image':
            return (
                <PrettyDecentImageBtn key={`toolbar-option-${option?.id}`} {...props}>
                    {option?.icon ?? null}
                </PrettyDecentImageBtn>
            );
        case 'link':
            return (
                <PrettyDecentLinkBtn key={`toolbar-option-${option?.id}`} {...props}>
                    {option?.icon ?? null}
                </PrettyDecentLinkBtn>
            );
        default:
            return (
                <PrettyDecentButton key={`toolbar-option-${option?.id}`} {...props}>
                    {option?.icon ?? null}
                </PrettyDecentButton>
            );
    }
};
