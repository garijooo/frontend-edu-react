import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './ActionButton.module.css'

ActionButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default function ActionButton({ children, ...rest }) {

    return (
        <button
            data-testid={rest['data-testid']}
            type={rest.onClick ? 'button' : 'submit'}
            onClick={rest.onClick}
            className={cx(styles.button, rest.className)}
        >
            {children}
        </button>
    );
}