import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Input.module.css'

import { DEFAULT_INPUT_MAX_LENGTH } from  '../../../constants'

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    maxLength: PropTypes.number,
    onFocusChange: PropTypes.func,
}

Input.defaultProps = {
    required: false,
    className: '',
    id: '',
    maxLength: DEFAULT_INPUT_MAX_LENGTH,
    onFocusChange: () => {},
}

export default function Input({ type, value, placeholder, onChange, required, className, id, maxLength, onFocusChange, ...rest }) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            maxLength={maxLength}
            className={cx(styles.input, className)}
            id={id}
            autoFocus={rest.autoFocus}
            data-testid={rest['data-testid']}
            onFocus={() => onFocusChange(true)}
            onBlur={() => onFocusChange(false)}
            />
    );
}
