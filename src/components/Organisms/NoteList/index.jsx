import React from 'react';
import PropTypes from 'prop-types';

import NotePreview from '../../Molecules/NotePreview';

import styles from './NoteList.module.css';

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            authorId: PropTypes.string,
        }),
    ).isRequired,
};

export default function NoteList({ notes }) {
    return (
        <ul className={styles.list}>
            {
                notes === [] 
                    ? 'No notes yet...' 
                    : notes.map((note) => (
                        <NotePreview
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            text={note.text}
                        />
                    ))
            }
        </ul>
    );
}