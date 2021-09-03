import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { useQuery } from '@apollo/client';

import PageWrapper from '../../Templates/PageWrapper';
import NoteForm from '../../Templates/NoteForm';

import { GetNote } from '../../../queries';

Note.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
}

export default function Note({ match }) {
    const { id } = match.params;
    const { data } = useQuery(GetNote, {
        variables: {
            id,
        }
    })

    const [title, setTitle] = useState(get(data, 'getNote.title', ''));
    const [text, setText] = useState(get(data, 'getNote.text', ''));
    return (
        <PageWrapper 
            render={() => (
                <NoteForm 
                    title={title ? title : get(data, 'getNote.title', '')}
                    text={text ? text : get(data, 'getNote.text', '')}
                    onTitleChange={(value) => setTitle(value)}
                    onTextChange={(value) => setText(value)}    
                />
            )}
        />
    );
}