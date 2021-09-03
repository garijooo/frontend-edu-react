import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { get } from 'lodash';

import { AddNote } from '../../../queries';

import PageWrapper from '../../Templates/PageWrapper';
import NoteForm from '../../Templates/NoteForm';

export default function Blank() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    const [createNote, { loading, error }] = useMutation(AddNote);

    if (loading) console.log('loading');
    if (error) console.log(error.message);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        createNote();
    }

    return (
        <PageWrapper 
            render={() => (
                <>
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <button type="submit">
                            submit
                        </button>
                    </form>
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