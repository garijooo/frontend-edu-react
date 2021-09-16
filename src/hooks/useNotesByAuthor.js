import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetAllNotesByAuthor } from '../queries';

export default function useNotesByAuthor(id) {
    const { data, refetch } = useQuery(GetAllNotesByAuthor, {
        variables: {
            id,
        },
    });
    const memoizedNotes = useMemo(() => get(data, 'getAllNotesByAuthor', []), [data])
    return { notes: memoizedNotes, refetch }
}