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
    /* height: 100%; */
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
    background: #eee;

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
