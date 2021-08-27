import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { AiOutlinePlus } from 'react-icons/ai'

import Input from '../Input'
import ActionButton from '../ActionButton'

import styles from './Form.module.css';

Form.propTypes = {
    /** Label of the Form */
    label: PropTypes.string.isRequired,
}

export default function Form({ label }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(`${title} ${description}`)
    }

    return (
        <form 
            className={styles.form}
            onSubmit={(e) => onSubmitHandler(e)}
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
                htmlFor="description"
                className={styles.item}
            >
                Description:
                <Input
                    value={description}
                    placeholder="write description"
                    onChange={(value) => setDescription(value)}
                    required
                    id="description"
                />
            </label>
            <div className={styles.button}>
                <ActionButton>
                    <AiOutlinePlus />
                    Add
                </ActionButton>
            </div>
        </form>
    );
}
