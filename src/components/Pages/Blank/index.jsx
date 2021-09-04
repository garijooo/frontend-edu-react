import React, { useEffect, useState } from 'react';
import { useQuery ,useMutation } from '@apollo/client';
import { get } from 'lodash';

import { AddNote, GetNotesAmount } from '../../../queries';

import PageWrapper from '../../Templates/PageWrapper';
import NoteForm from '../../Templates/NoteForm';

export default function Blank() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    const query = useQuery(GetNotesAmount);
    const [createNote, { data }] = useMutation(AddNote);

    if (data) console.log(data);

    // if (loading) console.log('loading');
    // if (error) console.log(error.message);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const amount = get(query, 'data.getNotesAmount', null);
        if (amount) {
            createNote({
                variables: {
                    note: { text: text, title: title, id: parseInt(amount) - 1 }, 
                    authorId: localStorage.getItem('userId').toString()
                  }
            });    
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (title) {
                console.log(title);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [title, text]);


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