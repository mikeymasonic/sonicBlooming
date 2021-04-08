import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from '../Map/Map';
import Player from '../Player/Player';
import { DataProvider } from '../../hooks/DataProvider';
import About from '../About/About';
import Header from '../Header/Header';

function App() {
  return (

    <Router>
      <DataProvider>
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Route component={Player} />
      </DataProvider>
    </Router>
  
  
  );
}

export default App;
