import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetNotesAmount } from '../queries';

export default function useNotesAmount() {
    const { data, refetch } = useQuery(GetNotesAmount);
    const amount = get(data, 'getNotesAmount', null);
    return { amount, refetch };
}