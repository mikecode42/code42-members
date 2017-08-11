import React from 'react';
import { withRouter } from 'react-router-dom';

const MemberDetail = (props) => {
  const { handle } = props.match.params;

  const member = props.members.find(current => current.handle === handle);

  if (member) {
    return (
      <div>
        <h1>Member Detail</h1>
        <div>
          Handle: {member.handle}
        </div>
        <div>
          Name: {member.name}
        </div>
      </div>
    );
  }
  // TODO redirect to 404?
  return null;
};

export default withRouter(MemberDetail);
