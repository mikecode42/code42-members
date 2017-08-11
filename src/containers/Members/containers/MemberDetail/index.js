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
        <div>
          Image: <img src={member.imageUrl} alt="user" />
        </div>
        <div>
          Repositories:{' '}
          {member.repositories.map(repo =>
            (<div key={repo.title}>
              <a href={repo.url}>
                {repo.title}
              </a>
            </div>),
          )}
        </div>
        <div>
          Location: {member.location}
        </div>
        <div>
          Email: {member.email}
        </div>
        <div>
          Join Date: {member.joined.toDateString()}
        </div>
      </div>
    );
  }
  // TODO redirect to 404?
  return null;
};

export default withRouter(MemberDetail);
