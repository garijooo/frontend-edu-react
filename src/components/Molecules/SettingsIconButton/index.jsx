import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineSetting } from 'react-icons/ai'

import IconButton from '../../Atoms/IconButton'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

SettingsIconButton.propTypes = {
    size: PropTypes.number,
    onClick: PropTypes.func.isRequired,
}

export default function SettingsIconButton({ size = DEFAULT_ICON_BUTTON_SIZE, onClick }) {
    return (
        <IconButton onClick={onClick}>
            <AiOutlineSetting size={size} />
        </IconButton>
    );
}