import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import About from './About';

describe('About component', () => {
  afterEach(() => cleanup());
  it('renders About', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <About />
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
