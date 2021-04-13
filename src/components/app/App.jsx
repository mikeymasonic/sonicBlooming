import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from '../Map/Map';
import Player from '../Player/Player';
import { DataProvider } from '../../hooks/DataProvider';
import About from '../About/About';
import Header from '../Header/Header';
import Upload from '../Upload/Upload';
import Playlist from '../Playlist/Playlist';

function App() {
  // const location = useHandleMapLocation;

  return (

    <Router>
      <DataProvider>
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/about" exact component={About} />
          <Route path="/upload" exact component={Upload} />
        </Switch>
        <Route component={Player} />
        <Route component={Playlist} />
      </DataProvider>
    </Router>
  
  );
}

export default App;
