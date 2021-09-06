import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import Input from '../../Atoms/Input';

import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [searching, setSearching] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('searched');
    }

    return (
        <form className={styles.searchBar} onSubmit={onSubmitHandler}>
            <Input 
                type="search" 
                onChange={(value) => setSearching(value)} 
                value={searching}
                placeholder="Search..."
                className={styles.input} 
            />
            <button type="submit" className={styles.button}>
                <AiOutlineSearch 
                    className={styles.icon}
                    size={18}
                />
            </button>
        </form>
    );
}