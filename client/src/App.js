import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Elements from './components/Elements.js';
import Breadcrumb from './components/Breadcrumb';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Breadcrumb} />
      <Switch>
        <Route exact path="/*" component={Elements} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
