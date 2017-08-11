import React from 'react';
import styled from 'styled-components';

import MaterialList, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import MaterialPaper from 'material-ui/Paper';

import config from '../../../../../config';

const Paper = styled(MaterialPaper)`
  margin-top: ${config.spacing.ONE_AND_HALF};
  margin-bottom: ${config.spacing.ONE_AND_HALF};
`;

const List = styled(MaterialList)`
  width: 100%;
  background-color: #ffffff;
`;

const onItemClick = item => () => {
  window.location = item.url;
};

export default (props) => {
  const { title, items } = props;

  const listItems = items.repositories.map(item =>
    (<ListItem key={item.name} onClick={onItemClick(item)} button>
      <ListItemText primary={item.name} />
    </ListItem>),
  );

  const subheader = (
    <ListSubheader>
      {title}
    </ListSubheader>
  );

  return (
    <Paper>
      <List subheader={subheader}>
        {listItems}
      </List>
    </Paper>
  );
};
