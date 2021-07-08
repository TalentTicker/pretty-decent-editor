import { RenderElementProps } from 'slate-react';
import React from 'react';
import styled from 'styled-components';

export const PrettyDecentParagraph = ({ attributes, children }: Omit<RenderElementProps, 'element'>): JSX.Element => (
    <StyledParagraph {...attributes}>{children}</StyledParagraph>
);

const StyledParagraph = styled.div`
    line-height: 1.5;
`;
