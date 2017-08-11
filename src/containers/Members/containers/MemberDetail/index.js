import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import MaterialCard, { CardContent as MaterialCardContent, CardMedia as MaterialCardMedia } from 'material-ui/Card';
import MaterialList, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import MaterialPaper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const Card = styled(MaterialCard)`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin: 12px;
  max-height: calc(100vh - 24px);
  width: 100%;
  overflow-y: auto !important;
`;

const CardMedia = styled(MaterialCardMedia)`
  flex: 0;
  margin: auto;
`;

const CardContent = styled(MaterialCardContent)`
  flex: 1;
  /* overflow-y: auto; */
`;

const List = styled(MaterialList)`
  width: 100%;
  background-color: white;
`;

const Paper = styled(MaterialPaper)`
  margin-top: 18px;
  margin-bottom: 18px;
`;

const UserImage = styled.img`
  width: 460px;
  height: 460px;
`;

const MemberDetail = (props) => {
  const { handle } = props.match.params;

  const member = props.members.find(current => current.handle === handle);

  if (member) {
    const repos = member.repositories.map(repo =>
      (<ListItem key={repo.title} button>
        {/* <a href={repo.url}> */}
        <ListItemText primary={repo.title} />
        {/* </a> */}
      </ListItem>),
    );

    return (
      <Card>
        <CardMedia>
          <UserImage src={member.imageUrl} alt="user" />
        </CardMedia>
        <CardContent>
          <Typography type="headline">
            {member.name}
          </Typography>
          <Typography type="subheading" color="secondary">
            {member.handle}
          </Typography>
          <Typography type="caption">Location</Typography>
          <Typography>
            {member.location ? member.location : 'N/A'}
          </Typography>
          <Typography type="caption">Email</Typography>
          <Typography>
            {member.email ? member.email : 'N/A'}
          </Typography>
          <Typography type="caption">Join Date</Typography>
          <Typography>
            {member.joined.toDateString()}
          </Typography>
          <Paper>
            <List subheader={<ListSubheader>Repositories</ListSubheader>}>
              {repos}
            </List>
          </Paper>
        </CardContent>
      </Card>
    );
  }
  // TODO redirect to 404?
  return null;
};

export default withRouter(MemberDetail);
