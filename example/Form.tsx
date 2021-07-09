import React from 'react';
import PrettyDecentEditor from '../src';

export const Form = () => {
    const onSubmit = (event: React.FormEvent) => {
        alert('oops');
    };
    return (
        <form onSubmit={onSubmit}>
            <PrettyDecentEditor
                onAttachment={(files) => console.table(files)}
                // onEditorChange={(value) => console.log(value.toHTML())}
            />
        </form>
    );
};
