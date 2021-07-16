import React, { useState } from 'react';
import { usePrettyDecentAttachments } from './hook';
import {
    StyledList,
    Attachment,
    AttachmentAction,
    AttachmentText,
    AttachmentIcon,
    AttachmentActionContainer,
    AttachmentIconContainer,
    StyledText,
} from './style';
import { MdClose } from 'react-icons/md';
import { useCallback } from 'react';
import Tippy from '@tippyjs/react';
import { usePrettyDecentProps } from 'components/Editor/hooks/hook';
import { PrettyDecentFile } from 'index';
import { AnimatePresence } from 'framer-motion';
import { BiCheck } from 'react-icons/bi';
import { useMemo } from 'react';
import { useEffect } from 'react';
export const PrettyDecentAttachmentList = (): JSX.Element => {
    const { attachments, setAttachments } = usePrettyDecentAttachments();
    const { onAttachmentRemove } = usePrettyDecentProps();
    const condensedList = useMemo(() => attachments.slice(0, 3), [attachments]);
    const [list, setList] = useState<PrettyDecentFile[]>(condensedList);
    // const overflow = useMemo(
    //     () => attachments.filter((attachment) => condensedList.find((item) => item.id === attachment.id)),
    //     [],
    // );
    const handleClick = useCallback(
        (attachment: PrettyDecentFile) => async (event: React.MouseEvent) => {
            event.preventDefault();
            onAttachmentRemove && (await onAttachmentRemove(attachment));
            setAttachments && setAttachments((ps) => ps.filter((a) => a.id !== attachment.id));
            setList((ps) => ps.filter((a) => a.id !== attachment.id));
        },
        [],
    );

    const handleShowMore = () => {
        setList(attachments);
    };
    const handleShowLess = () => {
        setList(condensedList);
    };

    useEffect(() => {
        // condensedList.length > 0 && setList(condensedList);
    }, []);

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
            {/* {attachments.length > 0 ? (
                attachments.length > 3 ? (
                    <ShowMore onClick={handleShowMore} extraAttachments={attachments.length - condensedList.length} />
                ) : (
                    <ShowLess onClick={handleShowLess} />
                )
            ) : null} */}
        </AnimatePresence>
    );
};

type ShowMoreProps = {
    onClick: () => void;
    extraAttachments: number;
};
const ShowMore = ({ onClick, extraAttachments }: ShowMoreProps) => {
    return <StyledText onClick={onClick}>Show {extraAttachments} More</StyledText>;
};
const ShowLess = ({ onClick }: Omit<ShowMoreProps, 'extraAttachments'>) => {
    return <StyledText onClick={onClick}>Show Less</StyledText>;
};
