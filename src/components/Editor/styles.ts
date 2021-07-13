import { PrettyDecentThemeProps } from 'index';
import { Editable, Slate } from 'slate-react';
import styled from 'styled-components';

type Props = {
    height?: string;
};
export const StyledSlateEditor = styled(Editable)<Props>`
    border-radius: 0 0 5px 5px;
    padding: 24px;
    margin: 0 4px;
    overflow-y: scroll;
    max-width: 100%;
    background: #fff;
    height: ${({ height }) => height ?? '100%'};
    border-left: 1px solid #979797;
    border-right: 1px solid #979797;
    border-bottom: 1px solid #979797;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
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
