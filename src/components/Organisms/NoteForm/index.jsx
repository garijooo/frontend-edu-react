import React from 'react'
import PropTypes from 'prop-types'

import styles from './NoteForm.module.css'

NoteForm.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
}   

export default function NoteForm({ title, text, onTitleChange, onTextChange }) {
    return (
        <section className={styles.modal}>
            <input 
                value={title} 
                className={styles.title} 
                placeholder={`Enter title`} 
                onChange={(e) => onTitleChange(e.target.value)} 
            />
            <textarea 
                value={text} 
                className={styles.text} 
                placeholder={`Note...`} 
                onChange={(e) => onTextChange(e.target.value)} 
            />
        </section>
    )
}