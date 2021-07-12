import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ReactEditor as ReactEditor, withReact as withReact } from 'slate-react';
import { createEditor as createEditor } from 'slate';
import { PrettyDecentElements } from './elements';
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles';
import { PrettyDecentElement } from '../../types';
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar/PrettyDecentToolbar';
import { PrettyDecentLeafs } from './leafs';
import { withTables } from 'plugins/withTables';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { withHtml } from 'plugins/withHtml';
import { generateToolbar } from 'utils/generateToolbar';
import { PrettyDecentToolbarBody } from './elements/PrettyDecentToolbar/PrettyDecentToolbarBody';
import { usePrettyDecentProps } from './hooks/hook';
import { useDropArea } from 'react-use';
import { PrettyDecentAttachmentList } from './elements/PrettyDecentAttachmentList';
import { useKeybinds } from './hooks/useKeybinds';
import { withHistory } from 'slate-history';
import { usePrettyDecentAttachments } from './elements/PrettyDecentAttachmentList/hook';
import { v4 as uuid } from 'uuid';
import { checkFileSize } from 'utils/checkFileSize';
import { toBase64 } from 'utils/toBase64';
import { prettyDecentErrorNotification } from 'utils/prettyDecentError';
import { PrettyDecentNotifications } from './elements/PrettyDecentNotifications';
import { serialize } from 'utils/serialize';
import { ThemeProvider } from 'styled-components';
import withImages from 'plugins/withImages';
import { PrettyDecentEditorData, PrettyDecentProps } from 'index';
import { deserialize, wrapTopLevelInlineNodesInParagraphs } from 'utils/deserialize';
import { convertToHtml } from 'utils/convertToHtml';

const EMPTY: PrettyDecentElement[] = [
    {
        type: 'paragraph',
        children: [{ text: ' ', marks: [], bold: false, italic: false, underline: false, code: false }],
    },
];

export const PrettyDecentEditorHeart = (props: PrettyDecentProps): JSX.Element => {
    const {
        dispatch,
        onAttachment,
        onEditorChange,
        toolbarProps,
        className,
        initialState,
        renderAttachments,
        themeProps,
        placeholder,
        height,
    } = usePrettyDecentProps();
    const editor = useMemo(
        () => withImages(withHistory(withHtml(withTables(withReact(createEditor()))))),

        [],
    );
    const renderElement = useCallback((props) => <PrettyDecentElements {...props} />, []);
    const renderLeaf = useCallback((props) => <PrettyDecentLeafs {...props} />, []);
    const toolbarOptions = useMemo(() => generateToolbar(toolbarProps?.options ?? []), [toolbarProps]);
    const { handleKeybinds } = useKeybinds(editor);
    const { setAttachments, attachments } = usePrettyDecentAttachments();
    const [bond] = useDropArea({
        onFiles: (files) => handleDrop(files),
        // onUri: (uri) => console.log('uri', uri),
        // onText: (text) => console.log('text', text),
    });
    // Add the initial value when setting up our state.
    const [value, setValue] = useState<PrettyDecentElement[]>(EMPTY);

    const handleDrop = (files: File[]) => {
        if (files) {
            files.forEach(async (file) => {
                if (checkFileSize(file)) {
                    const url = await toBase64(file);
                    const filesWithId = files.map((file) => ({ id: uuid(), file, encodedUrl: url }));
                    onAttachment && onAttachment([...attachments, ...filesWithId]);
                    setAttachments && setAttachments((ps) => [...ps, ...filesWithId]);
                    ReactEditor.focus(editor);
                } else {
                    prettyDecentErrorNotification({
                        message: `File: ${file.name} was bigger then 3MB! please choose another file`,
                    });
                }
            });
        }
    };

    const handleChange = (newValue: PrettyDecentElement[]) => {
        if (typeof newValue !== 'undefined' && newValue.length > 0) {
            setValue(newValue);
            const returnValue: PrettyDecentEditorData = {
                children: newValue,
                toString: function () {
                    return JSON.stringify(this.children);
                },
                toEncodedString: function () {
                    return encodeURIComponent(this.toString());
                },
                toHTML: function () {
                    return serialize(this.children) as string;
                },
            };
            onEditorChange && onEditorChange(returnValue);
        }
    };
    useEffect(() => {
        dispatch && dispatch({ type: 'UPDATE', payload: props });

        return () => {
            // hotreload causes a crash
            // https://github.com/ianstormtaylor/slate/issues/3858
        };
    }, [dispatch, props]);
    console.log(initialState);
    useEffect(() => {
        if (initialState) {
            if (typeof initialState === 'string') {
                const html = convertToHtml(initialState.replace(/\n/g, ''));
                const fragment = deserialize(html.body);
                let fragmentWithOnlyBlocks = fragment;
                if (Array.isArray(fragment)) {
                    fragmentWithOnlyBlocks = wrapTopLevelInlineNodesInParagraphs(
                        editor,
                        fragment as PrettyDecentElement[],
                    );
                }
                console.log({ fragmentWithOnlyBlocks });
                const padded = [{ type: 'block', children: fragmentWithOnlyBlocks }];
                setValue(() => [...(padded as PrettyDecentElement[])]);
            } else {
                initialState && setValue(initialState as PrettyDecentElement[]);
            }
        }
    }, [initialState]);
    return (
        <ThemeProvider theme={themeProps}>
            <EditorContainer className={className} {...bond}>
                <StyledSlate editor={editor} value={value} onChange={handleChange}>
                    <PrettyDecentToolbar>
                        <PrettyDecentToolbarBody toolbarOptions={toolbarOptions} />
                    </PrettyDecentToolbar>
                    {renderAttachments ?? <PrettyDecentAttachmentList />}
                    <StyledSlateEditor
                        height={height}
                        placeholder={placeholder ?? ''}
                        spellCheck
                        autoFocus
                        onKeyDown={handleKeybinds}
                        data-testid="pretty-decent-editor"
                        name="pretty-decent-editor"
                        renderLeaf={renderLeaf}
                        renderElement={renderElement}
                    />
                </StyledSlate>
                <PrettyDecentNotifications />
            </EditorContainer>
        </ThemeProvider>
    );
};
