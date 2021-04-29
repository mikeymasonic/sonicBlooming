import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import Header from './Header';
const location = { pathname: '/' };

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(
      <Router>
        <DataProvider>
          <Header location={ location }/>
        </DataProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
