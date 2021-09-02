import React from 'react';

import PageWrapper from '../../Templates/PageWrapper';
import Form from '../../Organisms/Form';


export default function Main() {
    return (
        <PageWrapper
            render={() => (
                <React.Fragment>
                    <Form label="Add note" />
                </React.Fragment>
            ) }
        />
    );
}