import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import Header from './Header';

describe('Header component', () => {
  afterEach(() => cleanup());
  xit('renders Header', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Header />
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
