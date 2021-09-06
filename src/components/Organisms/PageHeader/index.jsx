import React from 'react';
import PropTypes from 'prop-types';

import HeaderUserInfo from '../../Molecules/HeaderUserInfo';
import HeaderLogo from '../../Molecules/HeaderLogo';

import styles from './PageHeader.module.css';

PageHeader.propTypes = {
    username: PropTypes.string,
}

export default function PageHeader({ username = '' }) {

    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderUserInfo username={username} />
        </header>
    );
}
