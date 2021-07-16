import React from 'react';
import { ImAttachment } from 'react-icons/im';
import { DropAreaBond } from 'react-use/lib/useDrop';
import { StyledDropZone } from './style';
type PrettyDecentDropZoneProps = {
    onDrop: (event: React.DragEvent<Element>) => void;
};
export const PrettyDecentDropZone = ({ onDrop, ...others }: PrettyDecentDropZoneProps): JSX.Element => {
    return (
        <StyledDropZone animate={{ opacity: 1 }} transition={{ duration: 0.25 }} onDrop={onDrop} {...others}>
            <ImAttachment />
            Drop files here.
        </StyledDropZone>
    );
};
