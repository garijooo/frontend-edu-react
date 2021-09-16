import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetNote } from '../queries';

export default function useNote(id) {
    const { data, loading, refetch } = useQuery(GetNote, {
        variables: {
            id,
        },
        fetchPolicy: 'cache-and-network',
    });
    const memoizedNote = useMemo(() => ({
        title: get(data, 'getNote.title', ''),
        text: get(data, 'getNote.text', ''),
    }), [data])
    return { memoizedNote, loading, refetch };
}