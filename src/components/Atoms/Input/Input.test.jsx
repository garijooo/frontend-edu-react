import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Input from '.'

describe('Input component', () => {
    afterEach(cleanup)

    const onChange = jest.fn()

    it('renders correctly', () => {
        var value = '';
        const { getByTestId }  = render(
            <Input 
                data-testid="input-element"
                value={value}
                placeholder="Enter value"
                required
                onChange={onChange}
            />
        )
        expect(getByTestId('input-element').value).toBe('')
    })

    test('value changes correctly', () => {
        var value = '';
        const { getByTestId } = render(
            <Input 
                data-testid="input-element"
                value={value}
                placeholder="Enter value"
                required
                onChange={onChange}
            />
        )
        const input = getByTestId('input-element')
        fireEvent.change(input, { target: { value: 'name'}})
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})
 
