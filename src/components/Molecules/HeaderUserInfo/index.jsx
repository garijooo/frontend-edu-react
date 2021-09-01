import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from '../../Atoms/UserAvatar';

import styles from './HeaderUserInfo.module.css';

HeaderUserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    /** Username of the current logged in user */
};


export default function HeaderUserInfo({ username }) {

    return (
        <div className={styles.container}>
            <h4 className={styles.username}>{username}</h4>
            <UserAvatar />
        </div>
    );
}