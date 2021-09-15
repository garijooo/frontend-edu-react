import React from 'react'
import PropTypes from 'prop-types'

import { BiGridAlt, BiListUl } from 'react-icons/bi'

import SettingsIconButton from '../../Molecules/SettingsIconButton'
import ReloadIconButton from '../../Molecules/ReloadIconButton'
import IconButton from '../../Atoms/IconButton'

import styles from './UserInfoBar.module.css'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

UserInfoBar.propTypes = {
    onReload: PropTypes.func.isRequired,
    onSettings: PropTypes.func.isRequired,
    onDisplayModeChange: PropTypes.func.isRequired,
    displayMode: PropTypes.string.isRequired,
}

export default function UserInfoBar({ onReload, onSettings, onDisplayModeChange, displayMode }) {
    const onDisplayModeChangeHandler = () => {
        if (displayMode === 'list') onDisplayModeChange('grid')
        else onDisplayModeChange('list')
    }

    return (
        <div className={styles.bar}>
            <ReloadIconButton onClick={onReload} />
            <SettingsIconButton onClick={onSettings} />
            {displayMode === 'list' 
                ? (
                <IconButton onClick={onDisplayModeChangeHandler} >
                    <BiListUl size={DEFAULT_ICON_BUTTON_SIZE} />
                </IconButton>) 
                : (
                    <IconButton onClick={onDisplayModeChangeHandler} >
                    <BiGridAlt size={DEFAULT_ICON_BUTTON_SIZE} />
                </IconButton>
                        
                )}
        </div>
    );
} 