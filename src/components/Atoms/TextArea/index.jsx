import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './TextArea.module.css';

TextArea.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default function TextArea({ text, placeholder, onChange, ...rest }) {

    return (
        <textarea
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={cx(styles.textArea, rest.className)}
        >
            {text}
        </textarea>
    );
}