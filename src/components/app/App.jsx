import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import About from '../About/About';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Player from '../Player/Player';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Route component={Header} />
        <Route component={Player} />
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/about" exact component={About} />
        </Switch>
      </DataProvider>
    </Router>
  );
};

export default App;
