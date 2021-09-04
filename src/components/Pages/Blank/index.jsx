import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { get } from 'lodash';

import useNotesByAuthor from '../../../hooks/useNotesByAuthor';
import useNotesAmount from '../../../hooks/useNotesAmount';

import { AddNote } from '../../../queries';

import PageWrapper from '../../Templates/PageWrapper';
import NoteForm from '../../Templates/NoteForm';

import { BLANK_NOTE_DELAY } from '../../../constants';

export default function Blank() {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const { refetch: update, notes } = useNotesByAuthor(localStorage.getItem('userId'));
    const { refetch, amount } = useNotesAmount();

    const [createNote, { data }] = useMutation(AddNote);

    useEffect(() => {
        const timer = setTimeout(
            () => {
                if (title && amount) {
                    createNote({
                        variables: {
                            note: { text: text, title: title, id: parseInt(amount) + 1 }, 
                            authorId: localStorage.getItem('userId').toString()
                        }
                    });    
                }
            }, 
            BLANK_NOTE_DELAY,
        );
        return () => clearTimeout(timer);
    }, [title, text]);

    useEffect(() => {
        const success = get(data, 'addNote', null);
        if (success) {
            refetch();
            update();
            history.push(`/notes/${amount + 1}`);
        }
    }, [data]);

    return (
        <PageWrapper 
            notes={notes}
            render={() => (
                <>
                    <NoteForm 
                        title={title}
                        text={text}
                        onTitleChange={(value) => setTitle(value)}
                        onTextChange={(value) => setText(value)}
                    />                
                </>
            )}
        />
    );
}