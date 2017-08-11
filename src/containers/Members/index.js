import React from 'react';
import { Route } from 'react-router-dom';

import MemberList from './components/MemberList';

import MemberDetail from './containers/MemberDetail';

const mockMembers = [
  { name: 'John Smith', handle: 'johnsmith1' },
  { name: 'Jane Doe', handle: 'calculon' },
  { name: 'Eric Johnson', handle: 'dude1983' },
];

export default () =>
  (<div>
    <MemberList members={mockMembers} />
    <Route path="/members/:id" component={MemberDetail} />
  </div>);
