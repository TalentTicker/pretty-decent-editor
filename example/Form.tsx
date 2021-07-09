import React from 'react';
import PrettyDecentEditor from '../src';

export const Form = () => {
    const onSubmit = (event: React.FormEvent) => {
        alert('oops');
    };
    const string =
        '<p>To $firstname $lastname</p> <p>Trust me</p> <p></p> <p></p> <p><span style="color: rgb(245,73,6);background-color: rgb(248,248,248);font-size: 18px;font-family: Source Sans Pro;"><strong>QA Team Lead - Test </strong></span></p> <p><span style="color: rgb(41,41,41);background-color: rgb(248,248,248);font-size: medium;font-family: Source Sans Pro;">Talent Ticker </span></p> <p><span style="color: rgb(41,41,41);background-color: rgb(248,248,248);font-size: medium;font-family: Source Sans Pro;">email@example.com </span></p> <p></p> ';
    return (
        <form onSubmit={onSubmit}>
            <PrettyDecentEditor
                initialState={string}
                onAttachment={(files) => console.table(files)}
                // onEditorChange={(value) => console.log(value.toHTML())}
            />
        </form>
    );
};
