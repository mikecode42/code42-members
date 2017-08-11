export default class Member {
  handle;
  name;
  imageUrl;
  repositories = [];
  organizations = [];
  contributions;
  contributedRepositories = [];
  location;
  email;
  joined;

  constructor(memberData, userDetails, repositories, organizations, events, eventRepos) {
    this.handle = memberData.login;
    this.name = userDetails.name;
    this.imageUrl = memberData.avatar_url;
    this.repositories = repositories.map(repo => ({ name: repo.name, url: repo.html_url }));
    this.organizations = organizations.map(org => ({ name: org.name, url: org.html_url }));
    this.contributions = events.length;
    this.contributedRepositories = eventRepos.map(repo => ({ name: repo.name, url: repo.html_url }));
    this.location = userDetails.location;
    this.email = userDetails.email;
    this.joined = new Date(userDetails.created_at);
  }
}
