import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import Blurb from './Blurb';

describe('Player component', () => {
  afterEach(() => cleanup());
  it('renders Player', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Blurb />
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
