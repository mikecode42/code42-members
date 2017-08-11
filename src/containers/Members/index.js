import React from 'react';

import { Route } from 'react-router-dom';

import MemberDetail from './containers/MemberDetail';

export default () =>
  (<div>
    <p>Members</p>
    <Route path="/members/:id" component={MemberDetail} />
  </div>);
