import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from '../Map/Map';
import Player from '../Player/Player';

function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" component={Map} />
    </Switch>
    <Player />
  </BrowserRouter>
  
  )
}

export default App;
