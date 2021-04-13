import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import Playlist from './Playlist';

describe('Player component', () => {
  afterEach(() => cleanup());
  it('renders Player', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Playlist />
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
