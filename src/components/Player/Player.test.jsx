import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import AudioPlayer from 'react-h5-audio-player';
import Player from './Player';

describe('Player component', () => {
  afterEach(() => cleanup());
  it('renders Player', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Player>
            <AudioPlayer />
          </Player>
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
