import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Members from './containers/Members';
import NotFound from './containers/NotFound';

export default () =>
  (<Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/members" />} />
      <Route path="/members" component={Members} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>);
