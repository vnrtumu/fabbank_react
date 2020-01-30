import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router,Route , Switch } from 'react-router-dom';
import './App.css';
import Basic from './components/upload2'
import Table from './components/table';
import Data from './components/data';
import DisplayData from './components/displaydata';

function App() {
  
  return (
    <div className="App">
       <Router>
        <Switch>

        <Route path='' component={Basic} exact/>
        <Route path="/table" component={Table} exact/>
        <Route path="/table/:id" component={Data} exact />
        <Route path="/displaydata/:id" component={DisplayData} />
        

        </Switch>
     
    </Router>

    </div>
  );
}

export default App;
