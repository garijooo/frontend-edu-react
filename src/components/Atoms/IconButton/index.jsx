import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import styles from './IconButton.module.css'

IconButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default function IconButton({ onClick, children, className = ''}) {
    return (
            <button
                className={cx(styles.button, className)}
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
    );
}