import React, { PropsWithChildren, useRef } from 'react';
import { PrettyDecentButton, PrettyDecentButtonProps } from 'components/Editor/elements/PrettyDecentButton';
import { PortalWithState } from 'react-portal';
import { LinkForm } from './LinkForm';

export const PrettyDecentLinkBtn = ({ children, ...props }: PropsWithChildren<PrettyDecentButtonProps>) => {
    const ref = useRef<HTMLButtonElement>(null);
    return (
        <PortalWithState node={ref.current}>
            {({ openPortal, closePortal, isOpen }) => (
                <>
                    <PrettyDecentButton {...props} onClick={openPortal} ref={ref}>
                        {children}
                    </PrettyDecentButton>
                    {isOpen && <LinkForm handleClose={closePortal} />}
                </>
            )}
        </PortalWithState>
    );
};
