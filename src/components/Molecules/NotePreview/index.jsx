import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NoteText from '../../Atoms/NoteText';
import NoteTitle from '../../Atoms/NoteTitle';

import styles from './NotePreview.module.css';

import { NOTE_PREVIEW_TEXT_MAX_LENGTH } from '../../../constants';

NotePreview.propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default function NotePreview({ key, title, ...rest }) {
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
            key={key} 
            className={styles.item}
        >
            <NoteTitle title={title} />
            <NoteText text={text}/>
        </li>
    );
}
