import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'

import { GetAllNotes } from '../queries'

export default function useNotes() {
    const { data } = useQuery(GetAllNotes)
    return useMemo(() => ({ notes: get(data, 'getAllNotes', []) }), [data])
}