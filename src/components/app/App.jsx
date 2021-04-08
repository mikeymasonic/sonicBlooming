import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from '../Map/Map';
import Player from '../Player/Player';
import { DataProvider } from '../../hooks/DataProvider';
import About from '../About/About';
import Header from '../Header/Header';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Map} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Player />
      </BrowserRouter>
    </DataProvider>
  
  );
}

export default App;
