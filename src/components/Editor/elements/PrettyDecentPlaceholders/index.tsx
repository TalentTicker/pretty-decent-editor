import React from 'react';
import { usePrettyDecentProps } from 'components/Editor/hooks/hook';
import { Transforms } from 'slate';
import { ReactEditor, useSlateStatic } from 'slate-react';
import { StyledSelect } from './styles';

export const PrettyDecentPlaceholders = (): JSX.Element => {
    const { placeholders } = usePrettyDecentProps();
    const editor = useSlateStatic();
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        ReactEditor.focus(editor);
        Transforms.insertText(editor, event.target.value);
    };
    return (
        <StyledSelect onChange={handleSelect} title="Placeholders" placeholder="Placeholders">
            <option disabled selected>
                Placeholders
            </option>
            {placeholders?.map((placeholder, i) => (
                <option key={`placeholder-${placeholder.value}-${i}`}>{placeholder.value}</option>
            ))}
        </StyledSelect>
    );
};
