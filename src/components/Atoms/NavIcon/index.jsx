import React from 'react'
import PropTypes from 'prop-types'

import styles from './NavIcon.module.css'

NavIcon.propTypes = {
    children: PropTypes.node.isRequired,
}

export default function NavIcon({ children }) {
    return (
        <div className={styles.icon}>
            {children}
        </div>
    );

}
