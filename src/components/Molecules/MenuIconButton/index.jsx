import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineMenu } from 'react-icons/ai'

import IconButton from '../../Atoms/IconButton'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

ReloadIconButton.propTypes = {
    size: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
}

export default function ReloadIconButton({ size = DEFAULT_ICON_BUTTON_SIZE, onClick, className = '' }) {
    return (
        <IconButton onClick={onClick} className={className}>
            <AiOutlineMenu size={size} /> 
        </IconButton>
    )
}
