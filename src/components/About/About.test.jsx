import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  afterEach(() => cleanup());
  it('renders About', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
