import React from 'react';

import { useQuery } from '@apollo/client';
import _ from 'lodash';

import PageWrapper from '../../Templates/PageWrapper';
import NoteList from '../../Organisms/NoteList';

import { GetAllNotesByAuthor } from '../../../queries';

export default function Main() {
    const id = localStorage.getItem('userId');

    const { data } = useQuery(GetAllNotesByAuthor, {
        variables: {
            id,
        },
    });

    return (
        <PageWrapper
            render={() => <NoteList notes={_.get(data, 'getAllNotesByAuthor') || []} /> }
        />
    );
}