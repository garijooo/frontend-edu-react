import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './NoteModal.module.css'

NoteModal.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,

}   

NoteModal.defaultProps = {
    title: '',
    text: '',

}

export default function NoteModal({ title, text }) {

    return (
        <section className={styles.modal}>
            <input value={title} className={styles.title} />
            <textarea value={text} className={styles.text} />
        </section>
    )
}