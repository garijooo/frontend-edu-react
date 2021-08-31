import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';

import PageWrapper from '../../Templates/PageWrapper';
import NoteList from '../../Organisms/NoteList';

import { GetAllNotesByAuthorId, GetAuthor } from '../../../queries';

export default function Main() {
    const [notes, setNotes] = useState([]);
    const [author, setAuthor] = useState({});

    const id = localStorage.getItem('userId');

    const notesQuery = useQuery(GetAllNotesByAuthorId, {
        variables: {
            id,
        }
    });

    useEffect(() => {
        const { data } = notesQuery;
        data && setNotes(data.getAllNotesByAuthor);
    }, [notesQuery]);

    const authorQuery = useQuery(GetAuthor, {
        variables: {
            id,
        }
    });

    useEffect(() => {
        const { data } = authorQuery;
        data && setAuthor(data.getAuthor)
    }, [authorQuery]);

    return (
        <PageWrapper
            author={author}
            loading={authorQuery.loading || notesQuery.loading}
            render={() => <NoteList notes={notes} /> }
        />
    );
}