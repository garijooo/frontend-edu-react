import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { get } from 'lodash';

import { GetNotesAmount } from '../queries';

export default function useNotesAmount() {
    const { data, refetch } = useQuery(GetNotesAmount);
    const memoizedAmount = useMemo(() => get(data, 'getNotesAmount', null), [data])
    return { memoizedAmount, refetch };
}