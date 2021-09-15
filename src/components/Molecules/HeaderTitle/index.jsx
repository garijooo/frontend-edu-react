import React from 'react'
import PropTypes from 'prop-types'

import HeaderLogo from '../HeaderLogo'
import MenuIconButton from '../MenuIconButton'

import styles from './HeaderTitle.module.css'

HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default function HeaderTitle({ title, onClick }) {
    return (
        <div className={styles.header}>
            <MenuIconButton onClick={onClick} className={styles.menu} />
            {title === 'Notes' && <HeaderLogo />}
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
}