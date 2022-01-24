import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ManageClient from './pages/ManageClient';
import Clients from './pages/Clients';
import Reports from './pages/Reports';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/manage-client" component={ManageClient} />
      <Route path="/clients" component={Clients} />
      <Route path="/reports" component={Reports} />
    </Switch>
  );
}

export default App;
