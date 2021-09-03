import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../Atoms/Input';
import TextArea from '../../Atoms/TextArea';
// import ActionButton from '../../Atoms/ActionButton';

import styles from './NoteForm.module.css';

NoteForm.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onTitleChange: PropTypes.func,
    onTextChange: PropTypes.func,
}

export default function NoteForm({ title = '', text = '', onTitleChange = null, onTextChange = null}) {
    onkeydown = () => {
        // console.lxog(e.key)

        // console.log(titleRef);
        // if (e.key === 'ArrowDown') textRef.current.focus();
        // if (e.key === 'ArrowUp') titleRef.current.focus();
        
    }

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