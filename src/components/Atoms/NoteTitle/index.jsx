import React from 'react';
import PropTypes from 'prop-types';

import styles from './NoteTitle.module.css';

NoteTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default function NoteTitle({ title }) {

    return (
        <h5 className={styles.title}>{title}</h5>
    );
}