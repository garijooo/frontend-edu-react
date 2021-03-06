import React from 'react';
import PropTypes from 'prop-types';

import styles from './NoteText.module.css';

NoteText.propTypes = {
    text: PropTypes.string.isRequired,
}

export default function NoteText({ text }) {

    return (
        <p className={styles.text}>{text}</p>
    );
}