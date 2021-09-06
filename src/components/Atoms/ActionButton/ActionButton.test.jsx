import React from 'react'
import { render } from '@testing-library/react'

import ActionButton from '.'

describe('ActionButton component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <ActionButton
                data-testid="action-button"
                onClick={() => console.log('pressed')}
            >
                Delete
            </ActionButton>
        )
        expect(getByTestId('action-button'));
    })
})