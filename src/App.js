import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Members from './containers/Members';

export default () =>
  (<Router>
    <div>
      <Route exact path="/" render={() => <Redirect to="/members" />} />
      <Route path="/members" component={Members} />
    </div>
  </Router>);
