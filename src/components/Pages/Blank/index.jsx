import React from 'react';
import PageWrapper from '../../Templates/PageWrapper';

export default function Blank() {
    return (
        <PageWrapper 
            render={() => (
                <>
                    123
                </>
            )}
        />
    );
}