import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'

import styles from './NavLink.module.css'

NavLink.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default function NavLink({ path, title }) {

    return (
        <Link 
            to={path}
            className={styles.link}
            activeClassName={styles.active}
        >
            {title}
        </Link>
    );
}

