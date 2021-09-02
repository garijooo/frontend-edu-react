import React from 'react';

import styles from './HeaderLogo.module.css';
import logo from '../../../Images/logo-notepad.png';

export default function HeaderLogo() {
    return (
        <img
            src={logo}
            alt="logo"
            className={styles.image}
        />
    );
}