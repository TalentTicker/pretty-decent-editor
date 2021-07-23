import { PrettyDecentThemeProps } from 'index';
import { Editable, Slate } from 'slate-react';
import styled, { css } from 'styled-components';

type Props = {
    height?: string;
    isHovering?: boolean;
};

export const hideScrollbars = css`
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

// const hovering = css`
//     border: 3px solid ${({ theme }) => theme.colors.primary};
//     border-radius: 5px;
// `;

export const StyledSlateEditor = styled(Editable)<Props>`
    border-radius: 0 0 5px 5px;
    padding: 24px;
    z-index: 2;
    margin: 0 4px;
    position: relative;
    overflow-y: scroll;
    max-width: calc(100vw - 8px);
    background: #fff;
    height: ${({ height }) => height ?? '100%'};
    border-left: 1px solid #979797;
    border-right: 1px solid #979797;
    border-bottom: 1px solid #979797;
    ::-webkit-scrollbar {
        display: none;
    }
    strong {
        font-weight: bold !important;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const StyledSlate = styled(Slate)`
    height: 100%;
`;
type EditorContainerProps = {
    focused?: boolean;
    theme: PrettyDecentThemeProps;
};
export const EditorContainer = styled.div<EditorContainerProps>`
    display: flex;
    width: 100%;
    position: relative;
    opacity: 1;
    outline-color: ${({ theme, focused }) => (focused ? theme.colors.primary : 'inherit')};
    flex-direction: column;
`;

export const DragContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
