import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import styles from './IconButton.module.css'

IconButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default function IconButton({ onClick, children, className = '' }) {
    return (
       <div className={styles.button}>
            <button
                className={cx(styles.icon, className)}
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
       </div>
    );
}