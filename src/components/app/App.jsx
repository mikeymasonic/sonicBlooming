import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataProvider } from '../../hooks/DataProvider';
import About from '../About/About';
import Blurb from '../Blurb/Blurb';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Player from '../Player/Player';
import Upload from '../Upload/Upload';
import Visualizer from '../Visualizer/Visualizer';

const App = () => {

  return (

    <Router>
      <DataProvider>
        <Route component={Header} />
        <Route component={Player} />
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/about" exact component={About} />
          <Route path="/upload" exact component={Upload} />
        </Switch>
        <Route component={Blurb} />
        <Route component={Visualizer} />
      </DataProvider>
    </Router>
  
  );
};

export default App;
