import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemText } from 'material-ui/List';

import List from './List';

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

MemberList.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withRouter(MemberList);
