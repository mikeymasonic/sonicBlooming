import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Map from './Map';

describe('Map component', () => {
  afterEach(() => cleanup());
  it('renders Map', () => {
    const { asFragment } = render(<Map />);
    expect(asFragment()).toMatchSnapshot();
  });
});
