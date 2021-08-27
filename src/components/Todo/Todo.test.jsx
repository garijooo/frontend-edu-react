import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './index';

describe('Todo component', () => {
   it('is rendered', () => {
    render(<Todo />)
    // expect();
   });
});