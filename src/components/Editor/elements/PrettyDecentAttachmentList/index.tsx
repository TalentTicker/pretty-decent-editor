import React from 'react';
import { usePrettyDecentAttachments } from './hook';
import {
    StyledList,
    Attachment,
    AttachmentAction,
    AttachmentText,
    AttachmentIcon,
    AttachmentActionContainer,
    AttachmentIconContainer,
} from './style';
import { MdClose } from 'react-icons/md';
import { useCallback } from 'react';
import Tippy from '@tippyjs/react';
import { usePrettyDecentProps } from 'components/Editor/hooks/hook';
import { PrettyDecentFile } from 'index';
import { AnimatePresence } from 'framer-motion';
import { BiCheck } from 'react-icons/bi';
export const PrettyDecentAttachmentList = (): JSX.Element => {
    const { attachments, setAttachments } = usePrettyDecentAttachments();
    const { onAttachmentRemove } = usePrettyDecentProps();
    const handleClick = useCallback(
        (attachment: PrettyDecentFile) => async () => {
            onAttachmentRemove && (await onAttachmentRemove(attachment));
            setAttachments && setAttachments((ps) => ps.filter((a) => a.id !== attachment.id));
        },
        [],
    );
    return (
        <AnimatePresence>
            <StyledList animate={{ opacity: 1, visibility: 'visible' }}>
                {attachments.map((attachment, i) => (
                    <Tippy
                        key={`${attachment.file.name}-${i}-x`}
                        theme="light"
                        placement="top"
                        content={attachment.file.name}
                    >
                        <Attachment animate={{ opacity: 1 }}>
                            <AttachmentIconContainer>
                                <AttachmentIcon>
                                    <BiCheck />
                                    <p>Attached</p>
                                </AttachmentIcon>
                            </AttachmentIconContainer>
                            <AttachmentActionContainer>
                                <AttachmentText>{attachment.file.name}</AttachmentText>
                                <AttachmentAction onClick={handleClick(attachment)}>
                                    <MdClose />
                                </AttachmentAction>
                            </AttachmentActionContainer>
                        </Attachment>
                    </Tippy>
                ))}
            </StyledList>
        </AnimatePresence>
    );
};
