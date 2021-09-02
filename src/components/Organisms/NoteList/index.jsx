import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

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
    const [current, setCurrent] = useState(-1);
    // const history = useHistory();

    onkeydown = (e) => {
        console.log(e.key);
        console.log(current);
        const { key } = e;
        if (key === 'ArrowDown' && current <= notes.length) {
            console.log(notes[current].id)
            // history.push(`/notes/${notes[current]}`)
        } 
        else if (key === 'ArrowUp' && current > 0) {
            console.log(notes[current].id)
        }
    }

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