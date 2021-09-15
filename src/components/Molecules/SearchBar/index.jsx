import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { AiOutlineSearch } from 'react-icons/ai'

import Input from '../../Atoms/Input'
import IconButton from '../../Atoms/IconButton'

import styles from './Searchbar.module.css'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default function SearchBar({ value, onChange, onSearch }) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={styles.bar}>
            <IconButton className={styles.button} onClick={onSearch}>
                <AiOutlineSearch 
                    className={styles.icon}
                    size={DEFAULT_ICON_BUTTON_SIZE}
                />
            </IconButton>
            <Input
                type="search"
                placeholder="Search..."
                value={value}
                onChange={onChange}
                className={cx(styles.search, {
                    // [styles.search]: !isFocused,
                    [styles.focused]: isFocused,
                })}
                onFocusChange={(value) => setIsFocused(value)}
            />
        </div>
    );
}