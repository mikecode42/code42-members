import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import MemberList from './components/MemberList';

import MemberDetail from './containers/MemberDetail';

const mockMembers = [
  {
    name: 'John Smith',
    handle: 'johnsmith1',
    imageUrl: 'http:///www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    repositories: [{ url: 'http://www.google.com', title: 'Google' }],
    location: 'New York, NY',
    email: 'name@email.com',
    joined: new Date(),
  },
  {
    name: 'Jane Doe',
    handle: 'calculon',
    imageUrl: 'http:///www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    repositories: [{ url: 'http://www.google.com', title: 'Google' }],
    location: 'New York, NY',
    email: 'name@email.com',
    joined: new Date(),
  },
  {
    name: 'Eric Johnson',
    handle: 'dude1983',
    imageUrl: 'http:///www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    repositories: [{ url: 'http://www.google.com', title: 'Google' }],
    location: 'New York, NY',
    email: 'name@email.com',
    joined: new Date(),
  },
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
