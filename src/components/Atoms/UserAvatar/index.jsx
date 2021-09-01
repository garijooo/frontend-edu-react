import React from 'react';

import styles from './UserAvatar.module.css';

import avatar from '../../../Images/logo.png'; 

export default function UserAvatar () {
    return (
        <img 
            src={avatar} 
            alt="user avatar"
            className={styles.image}
        />
    );
}
