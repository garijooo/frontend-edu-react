import React from 'react';

import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { AiOutlinePlusSquare } from 'react-icons/ai';

import SearchBar from '../../Molecules/SearchBar';
import NoteList from '../NoteList';
import ActionButton from '../../Atoms/ActionButton';

import { GetAllNotesByAuthor } from '../../../queries';


import styles from './SideBar.module.css';

export default function SideBar() {
    const id = localStorage.getItem('userId');

    const { data } = useQuery(GetAllNotesByAuthor, {
        variables: {
            id,
        },
    });

    return (
        <section className={styles.sidebar}>
            <div className={styles.container}>
                <ActionButton className={styles.addButton}>
                    <AiOutlinePlusSquare className={styles.icon} size={16} />
                    <p className={styles.text}>Create a new Note</p>  
                </ActionButton>
            </div>
            <SearchBar />
            <NoteList notes={get(data, 'getAllNotesByAuthor', [])} />
        </section>
    );
}