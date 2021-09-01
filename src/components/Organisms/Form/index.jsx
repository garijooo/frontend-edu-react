import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { AiOutlinePlus } from 'react-icons/ai'

import Input from '../../Atoms/Input'
import ActionButton from '../../Atoms/ActionButton'

import styles from './Form.module.css';

Form.propTypes = {
    /** Label of the Form */
    label: PropTypes.string.isRequired,
}

export default function Form({ label }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(`${title} ${text}`)
    }

    return (
        <form 
            className={styles.form}
            onSubmit={onSubmitHandler}
        >
            <h2>{label}</h2>
            <label 
                htmlFor="title"
                className={styles.item}
            >
                Title:
                <Input
                    value={title}
                    placeholder="write title"
                    onChange={(value) => setTitle(value)}
                    required
                    id="title"
                />
            </label>
            <label
                htmlFor="text"
                className={styles.item}
            >
                Text:
                <Input
                    value={text}
                    placeholder="write text"
                    onChange={(value) => setText(value)}
                    required
                    id="text"
                />
            </label>
            <ActionButton>
                <AiOutlinePlus />
                Add
            </ActionButton>
        </form>
    );
}
