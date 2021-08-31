import React from 'react';
import PropTypes from 'prop-types';

import NotePreview from '../../Molecules/NotePreview';

import styles from './NoteList.module.css';

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            authorId: PropTypes.string.isRequired,
        }),
    ),
};

export default function NoteList({ notes }) {
    return (
        <ul className={styles.list}>
            {notes.map((note) => (
                <NotePreview
                    key={note.id}
                    title={note.title}
                    text={note.text}
                />
            ))}
        </ul>
    );
}