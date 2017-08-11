import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import MemberList from './components/MemberList';

import MemberDetail from './containers/MemberDetail';

const mockMembers = [
  { name: 'John Smith', handle: 'johnsmith1' },
  { name: 'Jane Doe', handle: 'calculon' },
  { name: 'Eric Johnson', handle: 'dude1983' },
];

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailRoute = ({ component: Component, ...rest }) =>
  <Route {...rest} render={props => <Component members={mockMembers} {...props} />} />;

export default () =>
  (<MemberContainer>
    <MemberList members={mockMembers} />
    <DetailRoute path="/members/:handle" component={MemberDetail} />
  </MemberContainer>);
