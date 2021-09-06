import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetAllNotesByAuthor } from '../queries';

export default function useNotesByAuthor(id) {
    const { data, refetch } = useQuery(GetAllNotesByAuthor, {
        variables: {
            id,
        },
    });
    return { notes: get(data, 'getAllNotesByAuthor', []), refetch }
}