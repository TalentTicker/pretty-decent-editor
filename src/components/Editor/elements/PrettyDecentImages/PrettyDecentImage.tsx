import React, { PropsWithChildren } from 'react';
import { RenderElementProps, useFocused, useSelected } from 'slate-react';
import styled, { css } from 'styled-components';

export const PrettyDecentImage = ({
    attributes,
    children,
    element,
}: PropsWithChildren<RenderElementProps>): JSX.Element => {
    const selected = useSelected();
    const focused = useFocused();
    return (
        <StyledImage {...attributes} selected={selected} focused={focused}>
            {/* <div contentEditable={false}> */}
            <img src={element.url} />
            {children}
            {/* </div> */}
        </StyledImage>
    );
};

type StyledImageProps = {
    selected?: boolean;
    focused?: boolean;
};
export const StyledImage = styled.div<StyledImageProps>`
    ${({ selected, focused }) => css`
        width: 100%;
        img {
            /* width: 100%; */
            box-shadow: ${selected && focused ? '0 0 0 2px blue;' : 'none'};
            /* max-width: 100%; */
        }
    `}
`;
