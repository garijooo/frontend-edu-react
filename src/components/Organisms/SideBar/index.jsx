import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { AiOutlinePlusSquare } from 'react-icons/ai';

import ActionButton from '../../Atoms/ActionButton';
import SearchBar from '../../Molecules/SearchBar';
import NoteList from '../NoteList';
import OptionBar  from '../../Molecules/OptionBar'

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
                    <Link to="/notes/new" className={styles.link}>
                        <AiOutlinePlusSquare className={styles.icon} size={16} />
                        <p className={styles.text}>Create a new Note</p>                      
                    </Link>
                </ActionButton>
            </div>
            <SearchBar />
            <OptionBar />
            <NoteList notes={get(data, 'getAllNotesByAuthor', [])} />
        </section>
    );
}