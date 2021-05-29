import React from 'react';
import renderer from 'react-test-renderer';
import Cell from './Cell'

it('renders correctly', () => {
    const box = renderer
        .create(<Cell></Cell>);

    expect(box).toBeDefined();
});