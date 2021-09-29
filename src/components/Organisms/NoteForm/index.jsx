import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { BiPaint, BiImage, BiCheckSquare } from 'react-icons/bi'

import IconButton from '../../Atoms/IconButton'

import { DEFAULT_ICON_BUTTON_SIZE } from '../../../constants'

import styles from './NoteForm.module.css'

NoteForm.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
    isExpanded: PropTypes.func.isRequired,
}   

export default function NoteForm({ title, text, onTitleChange, onTextChange, isExpanded }) {
    return (
        <section className={styles.form}>
            <input 
                value={title} 
                className={cx(styles.title, {[styles.titleHidden]: !isExpanded})} 
                placeholder={`Enter title`} 
                onChange={(e) => onTitleChange(e.target.value)} 
            />
            <textarea 
                value={text} 
                className={cx(styles.text, {[styles.textAreaHidden]: !isExpanded})} 
                placeholder={`Note...`} 
                onChange={(e) => onTextChange(e.target.value)} 
            />
            <div className={styles.buttons}>
                <IconButton>
                    <React.Fragment>
                        <BiCheckSquare 
                            size={DEFAULT_ICON_BUTTON_SIZE}
                        />
                        <BiPaint 
                            size={DEFAULT_ICON_BUTTON_SIZE}
                        />
                        <BiImage 
                            size={DEFAULT_ICON_BUTTON_SIZE}
                        />
                    </React.Fragment>
                </IconButton>
            </div>
        </section>
    )
}