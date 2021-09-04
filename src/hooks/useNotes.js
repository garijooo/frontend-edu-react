import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetAllNotes } from '../queries';

export default function useNotes() {
    const { data } = useQuery(GetAllNotes);
    return { notes: get(data, 'getAllNotes', []) };
}