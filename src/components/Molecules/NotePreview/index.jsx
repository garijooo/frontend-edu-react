import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import NoteText from '../../Atoms/NoteText';
import NoteTitle from '../../Atoms/NoteTitle';

import styles from './NotePreview.module.css';

import { NOTE_PREVIEW_TEXT_MAX_LENGTH } from '../../../constants';

NotePreview.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default function NotePreview({ id, title, ...rest }) {
    const [text, setText] = useState('');

    useEffect(() => {
        if (rest) {
            const { text } = rest;
            if (text.length > NOTE_PREVIEW_TEXT_MAX_LENGTH)
                return setText(`${text.substr(0, NOTE_PREVIEW_TEXT_MAX_LENGTH).trim()}...`);
            return setText(text);
        }
        setText('');
    }, [rest]);
        
    return (
        <li
            className={styles.item}
        >
            <NavLink 
                activeClassName={styles.active}
                to={`/note/${id}`}
                className={styles.link}
            >
                <NoteTitle title={title} />
                <NoteText text={text}/>            
            </NavLink>
        </li>
    );
}
