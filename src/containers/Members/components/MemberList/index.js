import React from 'react';
import styled from 'styled-components';

import MaterialList, { ListItem, ListItemText } from 'material-ui/List';

const List = styled(MaterialList)`
  width: 100%;
  max-width: 300px;
  /* 16px is the padding on the material-ui List */
  height: calc(100vh - 16px);
  overflow: auto;
  background-color: white;
`;

const MemberList = (props) => {
  const { members } = props;

  const items = members.map(member =>
    (<ListItem key={member.handle} button>
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
};

MemberList.defaultProps = {
  members: [],
};

export default MemberList;
