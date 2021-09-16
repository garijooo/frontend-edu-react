import React from 'react'

import PageWrapper from '../../Templates/PageWrapper'
import NoteForm from '../../Organisms/NoteForm'

export default function Home() {
    return (
        <PageWrapper 
            render={() => (
                <>
                    <NoteForm />
                </>
            )}
        />
    )
}