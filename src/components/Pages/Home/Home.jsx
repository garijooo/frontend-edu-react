import React from 'react'
import PropTypes from 'prop-types'

import PageWrapper from '../../Templates/PageWrapper'
import NoteForm from '../../Organisms/NoteForm'

Home.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
}

export default function Home({ title, text, onTitleChange ,onTextChange }) {
    return (
        <PageWrapper 
            render={() => (
                <>
                    <NoteForm 
                        title={title}
                        text={text}
                        onTitleChange={onTitleChange}
                        onTextChange={onTextChange}
                        isExpanded={false}
                    />
                </>
            )}
        />
    )
}