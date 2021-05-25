import React from 'react';
import renderer from 'react-test-renderer';
import { BoxShadow } from './BoxShadow'

it('renders correctly', () => {
    const box = renderer
        .create(<BoxShadow></BoxShadow>);

    expect(box).toBeDefined();
});