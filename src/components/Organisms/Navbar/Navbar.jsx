import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { AiOutlineDelete } from 'react-icons/ai'
import { GrNotes } from 'react-icons/gr'
import { MdNotificationsNone } from 'react-icons/md'

import NavItem from '../../Molecules/NavItem'

import styles from './Navbar.module.css'

Navbar.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    onPageTitleChange: PropTypes.func.isRequired,
}

export default function Navbar({ isOpened, onPageTitleChange }) {
    const [isHovered, setIsHovered] = useState(false)
    
    const memoizedNavbarClass = useMemo(() => cx(styles.nav, {
        [styles.hidden]: !isOpened && !isHovered
    }), [isOpened, isHovered])

    return (
        <nav 
            className={memoizedNavbarClass}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ul className={styles.list}>
                <NavItem 
                    icon={() => <GrNotes />}
                    path="/home"
                    title="Notes"
                    onClick={onPageTitleChange}
                />
                <NavItem 
                    icon={() => <MdNotificationsNone />}
                    path="/notifications"
                    title="Notifications"
                    onClick={onPageTitleChange}
                />
                <NavItem 
                    icon={() => <AiOutlineDelete />}
                    path="/basket"
                    title="Basket"
                    onClick={onPageTitleChange}
                />
            </ul>
        </nav>
    );
}