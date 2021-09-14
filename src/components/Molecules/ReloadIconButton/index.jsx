import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineReload } from 'react-icons/ai'

import IconButton from '../../Atoms/IconButton'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

ReloadIconButton.propTypes = {
    size: PropTypes.number,
    onClick: PropTypes.func.isRequired,
}

export default function ReloadIconButton({ size = DEFAULT_ICON_BUTTON_SIZE, onClick }) {
    return (
        <IconButton onClick={onClick}>
            <AiOutlineReload size={size} /> 
        </IconButton>
    )
}
