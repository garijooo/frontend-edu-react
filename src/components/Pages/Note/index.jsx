import React from 'react';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';

import { GetNote } from '../../../queries';

Note.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
}

export default function Note({ match }) {
    const { id } = match.params;
    
    const { data } = useQuery(GetNote, {
        variables: {
            id,
        }
    })
    console.log(data.getNote);

    return (
        <div>
            {`id: ${id}`}
        </div>
    );
}