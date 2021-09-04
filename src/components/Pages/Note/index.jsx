import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import cx from 'classnames';
import { get } from 'lodash';

import useNotesByAuthor from '../../../hooks/useNotesByAuthor';
import useNote from '../../../hooks/useNote';

import { EditNote } from '../../../queries';

import PageWrapper from '../../Templates/PageWrapper';
import NoteForm from '../../Templates/NoteForm';

import styles from './Note.module.css';

import { NOTE_EDIT_DELAY, NOTIFICATION_DELAY} from '../../../constants';

Note.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
}

export default function Note({ match }) {
    const { id } = match.params;

    const { notes } = useNotesByAuthor(localStorage.getItem('userId'));
    const { note } = useNote(id);

    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);

    const [isNotificationShown, setIsNotificationShown] = useState(false);

    const [editNote, { data }] = useMutation(EditNote);

    const notificationClass = cx(styles.notification, { [styles.hidden]: !isNotificationShown });

    useEffect(() => {
        if (note.title !== title && note.text !== text) {
            setTitle(note.title);
            setText(note.text);    
        }
    }, [note]);

    useEffect(() => {
        const timer = setTimeout(
            () => {
                if (title && (title !== note.title || text !== note.text)) {
                    editNote({
                        variables: {
                            note: {
                                title,
                                text,
                                id,
                            }
                        }
                    });    
                }
            },
            NOTE_EDIT_DELAY,
        );
        return () => clearTimeout(timer);
    }, [title, text])

    useEffect(
        () => {
            const success = get(data, 'editNote', null);
            if (success) {
                setIsNotificationShown(true);
                setTimeout(
                    () => {
                        setIsNotificationShown(false);
                    },
                    NOTIFICATION_DELAY, 
                );
            }
        },
        [data]
    );


    return (
        <PageWrapper 
            notes={notes}
            render={() => (
               <>
                    <span className={notificationClass}>Note has been edited!</span>
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