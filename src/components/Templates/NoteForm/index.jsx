import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../Atoms/Input';
import TextArea from '../../Atoms/TextArea';

import styles from './NoteForm.module.css';

NoteForm.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onTitleChange: PropTypes.func,
    onTextChange: PropTypes.func,
    onKeyPressed: PropTypes.func,
}

export default function NoteForm({ title = '', text = '', onTitleChange = null, onTextChange = null, onKeyPressed = null}) {
    onkeydown = (e) => onKeyPressed(e.key);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('submit!');
    }

    return (
        <form
            onSubmit={onSubmitHandler}
            className={styles.form}
        >
            <Input 
                value={title}
                onChange={(value) => onTitleChange(value)}
                placeholder="Title..."
                required
                autoFocus
                className={styles.title}
            />
            <TextArea 
                text={text}
                onChange={(value) => onTextChange(value)}   
                placeholder="Start by typing here..."
                className={styles.textArea}
            />
        </form>
    );
}