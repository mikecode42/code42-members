import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { getAllMembers } from '../../services/api/members';
import MemberList from './components/MemberList';
import MemberDetail from './containers/MemberDetail';

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }

  async componentWillMount() {
    const members = await getAllMembers();
    this.setState({ members });
  }

  detailRoute = ({ component: InnerComponent, ...rest }) =>
    <Route {...rest} render={props => <InnerComponent members={this.state.members} {...props} />} />;

  render() {
    const DetailRoute = this.detailRoute;

    return (
      <MemberContainer>
        <MemberList members={this.state.members} />
        <DetailRoute path="/members/:handle" component={MemberDetail} />
      </MemberContainer>
    );
  }
}
