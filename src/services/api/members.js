/* eslint-disable import/prefer-default-export */
import _uniqWith from 'lodash/uniqWith';
import Member from '../models/Member';

const API_URL = 'https://api.github.com/orgs/code42/members';

// ------------- Internal Functions ------------- //

async function retrieveOrganizations(memberOrganizations) {
  return Promise.all(
    memberOrganizations.map(async (org) => {
      const orgResponse = await fetch(org.url);
      return orgResponse.json();
    }),
  );
}

async function retrieveEventRepos(eventRepos) {
  return Promise.all(
    eventRepos.map(async (repo) => {
      const repoResponse = await fetch(repo.url);
      return repoResponse.json();
    }),
  );
}

async function populateMember(memberData) {
  const userDetails = await (await fetch(memberData.url)).json();
  const repositories = await (await fetch(memberData.repos_url)).json();
  const memberOrgs = await (await fetch(memberData.organizations_url)).json();
  // The event URL contains an optional privacy path that we don't need
  const eventUrl = memberData.events_url.replace('{/privacy}', '');
  const events = await (await fetch(eventUrl)).json();

  // Need to retrieve full organization data for each org
  const organizations = await retrieveOrganizations(memberOrgs);

  // The repos in the event object don't contain the full set of data - retrieve the full data for each one
  const eventRepos = events.map(event => event.repo);
  const uniqueEventRepos = _uniqWith(eventRepos, (a, b) => a.id === b.id);
  const fullEventRepos = await retrieveEventRepos(uniqueEventRepos);

  return new Member(memberData, userDetails, repositories, organizations, events, fullEventRepos);
}

// ------------- Public Functions ------------- //

export async function getAllMembers() {
  const json = await (await fetch(API_URL)).json();
  const members = await Promise.all(json.map(populateMember));
  return members;
}
