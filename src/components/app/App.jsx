import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from '../Map/Map';
import Player from '../Player/Player';
import { DataProvider } from '../../hooks/DataProvider';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Map} />
        </Switch>
        <Player />
      </BrowserRouter>
    </DataProvider>
  
  );
}

export default App;
