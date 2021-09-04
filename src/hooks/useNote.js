import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetNote } from '../queries';

export default function useNote(id) {
    const { data, loading, refetch } = useQuery(GetNote, {
        variables: {
            id,
        },
        pollInterval: 1000,
    });
    const note = {
        title: get(data, 'getNote.title', ''),
        text: get(data, 'getNote.text', ''),
    }
    return { note, loading, refetch };
}