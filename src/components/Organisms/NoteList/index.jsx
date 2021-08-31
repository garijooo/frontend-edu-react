import React from 'react';
import PropTypes from 'prop-types';

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
                <li 
                    key={note.id}
                    className={styles.item}
                >
                    {note.title}
                </li>
            ))}
        </ul>
    );
}