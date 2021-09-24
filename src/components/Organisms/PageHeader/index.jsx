import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UserInfoBar from '../../Molecules/UserInfoBar';
import HeaderTitle from '../../Molecules/HeaderTitle';
import SearchBar from '../../Molecules/SearchBar';

import styles from './PageHeader.module.css';

PageHeader.propTypes = {
    username: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    onDisplayModeChange: PropTypes.func.isRequired,
    displayMode: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
}

export default function PageHeader({ username = '', onToggle, onDisplayModeChange, displayMode, pageTitle }) {
    console.log(username)
    const [search, setSearch] = useState('')

    const onSearchHandler = () => {
        console.log('searched!')
    }

    const onReloadHandler = () => {
        console.log('reload')
    }

    const onSettingsHandler = () => {
        console.log('settings')
    }

    return (
        <header className={styles.header}>
            <HeaderTitle 
                title={pageTitle} 
                onClick={onToggle}
            />
            <SearchBar  
                value={search}
                onChange={(value) => setSearch(value)}
                onSearch={onSearchHandler}
            />
            <UserInfoBar 
                onReload={onReloadHandler}
                onSettings={onSettingsHandler}
                onDisplayModeChange={onDisplayModeChange}
                displayMode={displayMode}
            />
        </header>
    );
}
