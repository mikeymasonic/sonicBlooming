import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Player from './Player';

describe('Player component', () => {
  afterEach(() => cleanup());
  it('renders Player', () => {
    const { asFragment } = render(<Player />);
    expect(asFragment()).toMatchSnapshot();
  });
});
