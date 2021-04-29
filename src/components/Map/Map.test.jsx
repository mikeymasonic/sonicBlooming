import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import Map from './Map';

describe('Map component', () => {
  afterEach(() => cleanup());
  it('renders Map', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Map />
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
