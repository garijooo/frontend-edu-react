import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Input.module.css'

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
}

Input.defaultProps = {
    required: false,
    className: '',
    id: PropTypes.string
}

export default function Input({ value, placeholder, onChange, required, className, id }) {
    return (
        <input
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className={cx(styles.input, className)}
            id={id}
        />
    );
}
