import { hideScrollbars } from 'components/Editor/styles';
import { motion } from 'framer-motion';
import styled, { css, DefaultTheme } from 'styled-components';

export const StyledList = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
    opacity: 0;
    visibility: collapse;
    background: #fff;
    border-left: 1px solid #979797;
    border-right: 1px solid #979797;
    padding: 4px;
    margin: 0 4px;
    max-height: 200px;
    overflow-y: scroll;
    ${hideScrollbars}/* height: 100%; */
    /* position: absolute; */
    /* margin: 2px; */
`;

export const sharedAttachment = css`
    display: flex;
    align-items: center;
    min-height: 36px;
    width: 100%;
    font-size: 12px;
    margin: 1px 1px;
    padding: 4px 4px 4px 4px;
    opacity: 0;
    border-radius: 5px;
    background: #f5f5f5;

    @media (max-width: 768px) {
        width: 100%;
        max-width: unset;
    }
`;

export const Attachment = styled(motion.li)`
    ${sharedAttachment}
`;

type AttachmentActionProps = {
    theme: DefaultTheme;
};

const sharedActionCss = css`
    ${({ theme }) => css`
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        color: ${theme.colors.primary};
        justify-content: center;
        :hover {
            color: orange;
            cursor: pointer;
        }
    `}
`;
export const AttachmentAction = styled.button<AttachmentActionProps>`
    ${sharedActionCss}
`;

export const AttachmentIcon = styled.span<AttachmentActionProps>`
    ${sharedActionCss}
    font-size: 25px;

    p {
        @media (max-width: 470px) {
            visibility: hidden;
        }
        font-weight: normal;
        font-size: 14px;
        margin: 0;
        color: #292929;
    }
`;

export const AttachmentText = styled.p`
    white-space: nowrap;
    overflow: hidden;
    color: #646464;
    max-width: 300px;
    margin-right: 24px;
    text-overflow: ellipsis;
`;

export const AttachmentActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AttachmentIconContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const StyledText = styled.span`
    color: blue;
    font-size: 12px;
    font-weight: bold;
`;

export const StyledDropZone = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 99999;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    flex-direction: column;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    opacity: 0;
    background: #ffffffb3;
    svg {
        color: ${({ theme }) => theme.colors.primary};
        margin: 8px;
        font-size: 60px;
        color: #000;
    }
`;
