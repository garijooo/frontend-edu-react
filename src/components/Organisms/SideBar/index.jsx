import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AiOutlinePlusSquare } from 'react-icons/ai';

import ActionButton from '../../Atoms/ActionButton';
import SearchBar from '../../Molecules/SearchBar';
import NoteList from '../NoteList';
import OptionBar  from '../../Molecules/OptionBar'

import styles from './SideBar.module.css';

SideBar.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            authorId: PropTypes.string,
        }),
    ),
    pressedKey: PropTypes.string,
    onKeyPressed: PropTypes.func,
}

export default function SideBar({ notes = [], pressedKey = '', onKeyPressed = null }) {
    return (
        <section className={styles.sidebar}>
            <div className={styles.container}>
                <ActionButton className={styles.addButton}>
                    <Link to="/notes/blank" className={styles.link}>
                        <AiOutlinePlusSquare className={styles.icon} size={16} />
                        <p className={styles.text}>Create a new Note</p>                      
                    </Link>
                </ActionButton>
            </div>
            <SearchBar />
            <OptionBar />
            <NoteList notes={notes} pressedKey={pressedKey} onKeyPressed={onKeyPressed} />
        </section>
    );
}