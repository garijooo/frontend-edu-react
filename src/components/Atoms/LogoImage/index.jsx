import React from 'react';

import styles from './LogoImage.module.css';
import logo from '../../../Images/logo192.png';

export default function LogoImage() {
    return (
        <img
            src={logo}
            alt="logo"
            className={styles.image}
        />
    );
}