import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import Upload from './Upload';

describe('Player component', () => {
  afterEach(() => cleanup());
  it('renders Player', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Upload />
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
