import React from 'react';
import { useToaster } from 'react-hot-toast';
import { PrettyDecentToast, PrettyDecentToaster } from './style';
import { AttachmentIcon } from '../PrettyDecentAttachmentList/style';
export const PrettyDecentNotifications = (): JSX.Element => {
    const { toasts, handlers } = useToaster();
    const { startPause, endPause } = handlers;
    return (
        <PrettyDecentToaster animate={{ opacity: 1 }} onMouseEnter={startPause} onMouseLeave={endPause}>
            {toasts
                .filter((toast) => toast.visible)
                .map((toast) => (
                    <PrettyDecentToast animate={{ opacity: 1 }} key={toast.id} {...toast.ariaProps}>
                        <AttachmentIcon>{toast.icon}</AttachmentIcon>
                        <p>{toast.message}</p>
                    </PrettyDecentToast>
                ))}
        </PrettyDecentToaster>
    );
};
