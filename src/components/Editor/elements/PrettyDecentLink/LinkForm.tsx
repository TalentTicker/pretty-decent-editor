import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Editor, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { IoMdClose } from 'react-icons/io';
import { useSlateStatic } from 'slate-react';
import { BtnContainer, CloseBtn, InputContainer, StyledInput, StyledLabel, SubmitBtn } from './styles';

type LinkFormProps = {
    handleClose: () => void;
};

export const LinkForm = ({ handleClose }: LinkFormProps): JSX.Element => {
    const [disabled, setDisabled] = useState(true);
    const editor = useSlateStatic();
    const [{ alias, url }, setValues] = useState({
        alias: '',
        url: '',
    });
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisabled(false);
        setValues((ps) => ({ ...ps, [event.target.name]: event.target.value }));
    };
    const handleEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleInsertion();
        }
    };
    const handleSubmit = () => {
        handleInsertion();
    };

    const handleInsertion = () => {
        ReactEditor.focus(editor);
        const textToInsert = alias === '' ? url : alias;
        Transforms.insertNodes(editor, { type: 'link', url, children: [{ text: textToInsert }] });
        handleClose();
    };
    const handleCloseBtn = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        handleClose();
    };

    useEffect(() => {
        const selectedText = Editor.string(editor, editor.selection ?? [0, 0]);
        setValues((ps) => ({ ...ps, alias: selectedText }));
        ref.current?.focus();
    }, []);
    return (
        <InputContainer onKeyDown={handleEnter}>
            <CloseBtn type="button" onClick={handleCloseBtn}>
                <IoMdClose />
            </CloseBtn>
            <StyledLabel htmlFor="alias">Text to display</StyledLabel>
            <StyledInput
                ref={ref}
                placeholder="Example Link"
                type="text"
                name="alias"
                id="alias"
                value={alias}
                onChange={handleChange}
            />
            <StyledLabel htmlFor="url">Link URL*</StyledLabel>
            <StyledInput placeholder="https://example.com" type="text" name="url" id="url" onChange={handleChange} />
            <BtnContainer>
                <SubmitBtn disabled={disabled} type="button" onClick={handleSubmit}>
                    Submit
                </SubmitBtn>
            </BtnContainer>
        </InputContainer>
    );
};
