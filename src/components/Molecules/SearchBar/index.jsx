import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import Input from '../../Atoms/Input';

import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [searching, setSearching] = useState('');

    return (
        <div className={styles.searchBar}>
            <Input 
                type="search" 
                onChange={(value) => setSearching(value)} 
                value={searching}
                placeholder="Search..."
                className={styles.input} 
            />
            <AiOutlineSearch 
                className={styles.icon}
            />
        </div>
    );
}