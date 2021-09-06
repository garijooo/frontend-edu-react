import React from 'react';
import { render } from '@testing-library/react';

import NoteText from "./";

describe('NoteText component', () => {
    it('renders correctly', () => {
        const text = 'note text';
        const { getByTestId } = render(
            <NoteText 
                data-testid="note-text"
                text={text}
            />
        );
        expect(getByTestId('note-text'));
    })

});