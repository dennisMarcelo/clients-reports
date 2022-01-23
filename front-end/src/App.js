import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ManageClient from './pages/ManageClient';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/manage-client" component={ManageClient} />
    </Switch>
  );
}

export default App;
