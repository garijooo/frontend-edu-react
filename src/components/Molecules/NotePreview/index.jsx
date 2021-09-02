import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import NoteText from '../../Atoms/NoteText';
import NoteTitle from '../../Atoms/NoteTitle';

import styles from './NotePreview.module.css';

import { NOTE_PREVIEW_TEXT_MAX_LENGTH } from '../../../constants';

NotePreview.propTypes = {
    id: PropTypes.number.isRequired,
    mainId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onUpdateCurrent: PropTypes.func.isRequired,
}

export default function NotePreview({ id, mainId, title, onUpdateCurrent, ...rest }) {
    const [text, setText] = useState('');
    const location = useLocation();

    useEffect(() => {
        const current = location.pathname.trim().split('/')[2];
        if (mainId === current) onUpdateCurrent(id);
    }, []);

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
            onClick={() => onUpdateCurrent(mainId)}
        >
            <NavLink 
                activeClassName={styles.active}
                to={`/notes/${mainId}`}
                className={styles.link}
            >
                <NoteTitle title={title} />
                <NoteText text={text}/>            
            </NavLink>
        </li>
    );
}
