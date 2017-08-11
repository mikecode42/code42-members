import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import Typography from 'material-ui/Typography';

import MemberCard, { CardContent, CardMedia } from './components/MemberCard';
import MemberBackButton from './components/MemberBackButton';
import MemberList from './components/MemberList';

const IMAGE_DIMENSIONS = 460;

class MemberDetail extends Component {
  onBackClick = () => {
    this.props.history.replace({ pathname: '/members' });
  };

  render() {
    const { handle } = this.props.match.params;

    const member = this.props.members.find(current => current.handle === handle);

    if (member) {
      return (
        <MemberCard>
          <MemberBackButton color="primary" onClick={this.onBackClick}>
            Back to Member List
          </MemberBackButton>
          <CardMedia>
            <img src={member.imageUrl} alt="user" width={IMAGE_DIMENSIONS} height={IMAGE_DIMENSIONS} />
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
              {moment(member.joined).format('M/D/YYYY')}
            </Typography>
            <Typography type="caption">Contributions</Typography>
            <Typography>
              {member.contributions}
            </Typography>
            <MemberList title="Repositories" items={member.repositories} />
            <MemberList title="Organizations" items={member.organizations} />
            <MemberList title="Contributed Repositories" items={member.contributedRepositories} />
          </CardContent>
        </MemberCard>
      );
    }
    // If the member wasn't found, redirect to 404
    if (this.props.members && this.props.members.length) {
      this.props.history.replace({ pathname: '/404' });
    }
    return null;
  }
}

MemberDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ handle: PropTypes.string.isRequired }).isRequired }).isRequired,
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      email: PropTypes.string,
      joined: PropTypes.instanceOf(Date).isRequired,
      contributions: PropTypes.number.isRequired,
      repositories: PropTypes.array,
      organizations: PropTypes.array,
      contributedRepositories: PropTypes.array,
    }),
  ).isRequired,
};

export default withRouter(MemberDetail);
