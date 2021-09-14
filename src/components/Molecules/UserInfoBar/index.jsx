import React from 'react';

import SettingsIconButton from '../../Molecules/SettingsIconButton'
import ReloadIconButton from '../../Molecules/ReloadIconButton'

import styles from './UserInfoBar.module.css'

export default function UserInfoBar() {

    return (
        <div className={styles.bar}>
            <ReloadIconButton />
            <SettingsIconButton />
        </div>
    );
} 