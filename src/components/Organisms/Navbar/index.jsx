import React from 'react'

import { AiOutlineDelete } from 'react-icons/ai'
import { GrNotes } from 'react-icons/gr'
import { MdNotificationsNone } from 'react-icons/md'

import NavItem from '../../Molecules/NavItem'

import styles from './Navbar.module.css'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

export default function Navbar() {

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <NavItem 
                    icon={() => <GrNotes />}
                    path="/"
                    title="Заметки"
                />
                <NavItem 
                    icon={() => <MdNotificationsNone size={DEFAULT_ICON_BUTTON_SIZE} />}
                    path="/notifications"
                    title="Напоминания"
                />
                <NavItem 
                    icon={() => <AiOutlineDelete size={DEFAULT_ICON_BUTTON_SIZE} />}
                    path="/basket"
                    title="Корзина"
                />
            </ul>
        </nav>
    );
}