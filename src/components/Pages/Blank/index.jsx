import React from 'react';

import PageWrapper from '../../Templates/PageWrapper';
import NoteForm from '../../Organisms/NoteForm';

export default function Blank() {

    return (
        <PageWrapper 
            render={() => <NoteForm />}
        />
    );
}