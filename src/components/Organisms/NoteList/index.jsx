import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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
    pressedKey: PropTypes.string,
    onKeyPressed: PropTypes.func,
};

export default function NoteList({ notes, pressedKey = '', onKeyPressed = null }) {
    const [current, setCurrent] = useState(-1);
    const history = useHistory();

    useEffect(() => {
        if (pressedKey === 'ArrowUp' && current - 1 >= 0) {
            setCurrent(current - 1);
            if (onKeyPressed) onKeyPressed('');
            history.push(`/notes/${parseInt(notes[current - 1].id)}`);
        } 
        else if (pressedKey === 'ArrowDown' && current + 1 < notes.length) {
            setCurrent(current + 1);
            onKeyPressed('');
            history.push(`/notes/${parseInt(notes[current + 1].id)}`);
        }
    }, [pressedKey]);

    return (
        <ul 
            className={styles.list}
        >
            {
                notes === [] 
                    ? 'No notes yet...' 
                    : notes.map((note, index) => (
                        <NotePreview
                            key={index}
                            id={index}
                            mainId={note.id}
                            title={note.title}
                            text={note.text}
                            onUpdateCurrent={(value) => setCurrent(value)}
                        />
                    ))
            }
        </ul>
    );
}