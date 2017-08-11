/* eslint-disable import/prefer-default-export */
import Member from '../models/Member';

const API_URL = 'https://api.github.com/orgs/code42/members';

async function populateMember(memberData) {
  const userDetailsResponse = await fetch(memberData.url);
  const userDetails = await userDetailsResponse.json();
  const repositoriesResponse = await fetch(memberData.repos_url);
  const repositories = await repositoriesResponse.json();
  return new Member(memberData, userDetails, repositories);
}

export async function getAllMembers() {
  const response = await fetch(API_URL);
  const json = await response.json();
  const members = await Promise.all(json.map(populateMember));
  return members;
}
