import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Main from './pages/Main.jsx';
import Login from './pages/Login';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';
import history from './utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" component={Main} />
    </Switch>
  </Router>
);

export default App;
