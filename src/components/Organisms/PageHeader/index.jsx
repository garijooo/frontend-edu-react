import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './PageHeader.module.css';
import UserInfoBar from '../../Molecules/UserInfoBar';
import HeaderTitle from '../../Molecules/HeaderTitle';

PageHeader.propTypes = {
    username: PropTypes.string,
}

export default function PageHeader({ username = '' }) {
    const [title, setTitle] = useState('Notes');
    return (
        <header className={styles.header}>
            <HeaderTitle title={title} />
            <UserInfoBar />
            {/* <HeaderUserInfo username={username} /> */}
            <p onClick={() => setTitle('Notes')}>{username}</p>
        </header>
    );
}
