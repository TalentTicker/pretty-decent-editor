import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withReact, Slate } from 'slate-react';
import { PrettyDecentElement } from '../pretty';

export const PrettyDecentTestEditor = ({ children }: { children: JSX.Element }): JSX.Element => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState<PrettyDecentElement[]>([
        {
            type: 'paragraph',
            children: [{ text: '', marks: [], bold: false, italic: false, underline: false, code: false }],
        },
    ]);
    const handleChange = (value: PrettyDecentElement[]) => setValue(value);
    return (
        <Slate editor={editor} value={value} onChange={handleChange}>
            {children}
        </Slate>
    );
};
