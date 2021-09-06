import React, { useState } from 'react';

import Input from '../../Atoms/Input';
import TextArea from '../../Atoms/TextArea';
import ActionButton from '../../Atoms/ActionButton';

import styles from './NoteForm.module.css';

export default function NoteForm() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

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
                onChange={(value) => setTitle(value)}
                placeholder="Title..."
                required
            />
            <TextArea 
                value={text}
                onChange={(value) => setText(value)}   
                placeholder="Write something..."
                className={styles.textArea}
            />
            <ActionButton>
                Add note
            </ActionButton>
        </form>
    );
}