import React from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { useQuery } from '@apollo/client';

import PageWrapper from '../../Templates/PageWrapper';

import { GetNote } from '../../../queries';
import { Link } from 'react-router-dom';

NotePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
}

export default function NotePage({ match }) {
    const { id } = match.params;
    const { data } = useQuery(GetNote, {
        variables: {
            id,
        }
    })

    return (
        <PageWrapper 
            render={() => (
            <div>
                <Link to="/">
                    Back
                </Link>
                <p>
                    {get(data, 'getNote.title', '')}
                </p>
                <p>
                    {get(data, 'getNote.text', '')}
                </p>
            </div>
            )}
        />
    );
}