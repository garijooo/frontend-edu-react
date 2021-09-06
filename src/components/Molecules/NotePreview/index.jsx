import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { get } from 'lodash';

import NoteText from '../../Atoms/NoteText';
import NoteTitle from '../../Atoms/NoteTitle';

import formatText from '../../../utils/formatText';

import styles from './NotePreview.module.css';

import { 
    NOTE_PREVIEW_TEXT_MAX_LENGTH, 
    NOTE_PREVIEW_TITLE_MAX_LENGTH, 
} from '../../../constants';

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
        const current = location.pathname.split('/')[2];
        if (mainId === current) onUpdateCurrent(id);
    }, []);

    useEffect(() => {
        if (get(rest, 'text', null)) {
            const { text } = rest;
            return setText(formatText(text, NOTE_PREVIEW_TEXT_MAX_LENGTH));
        }
        return () => setText('');
    }, [rest]);
     
    const formattedTitle = () => formatText(title, NOTE_PREVIEW_TITLE_MAX_LENGTH);

    return (
        <li
            className={styles.item}
            onClick={() => onUpdateCurrent(id)}
        >
            <NavLink 
                activeClassName={styles.active}
                to={`/notes/${mainId}`}
                className={styles.link}
            >
                <NoteTitle title={formattedTitle()} />
                <NoteText text={text}/>            
            </NavLink>
        </li>
    );
}
