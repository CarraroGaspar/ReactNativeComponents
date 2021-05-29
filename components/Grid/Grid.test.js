import React from 'react';
import renderer from 'react-test-renderer';
import Grid from './Grid'

it('renders correctly', () => {
    const box = renderer
        .create(<Grid></Grid>);

    expect(box).toBeDefined();
});