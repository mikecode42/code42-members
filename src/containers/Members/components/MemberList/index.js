import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import MaterialList, { ListItem, ListItemText } from 'material-ui/List';

const List = styled(MaterialList)`
  width: 100%;
  max-width: 300px;
  /* 16px is the padding on the material-ui List */
  height: calc(100vh - 16px);
  overflow: auto;
  background-color: white;
`;

class MemberList extends Component {
  selectMember = handle => () => {
    this.props.history.push({ pathname: `/members/${handle}` });
  };

  render() {
    const { members } = this.props;

    const items = members.map(member =>
      (<ListItem key={member.handle} onClick={this.selectMember(member.handle)} button>
        <Avatar>
          <img src={member.imageUrl} alt="Member Avatar" width={40} height={40} />
        </Avatar>
        <ListItemText primary={member.name} secondary={member.handle} />
      </ListItem>),
    );

    if (members && members.length) {
      return (
        <List>
          {items}
        </List>
      );
    }
    return null;
  }
}

MemberList.defaultProps = {
  members: [],
};

export default withRouter(MemberList);
