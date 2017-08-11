export default class Member {
  handle;
  name;
  imageUrl;
  repositories = [];
  location;
  email;
  joined;

  constructor(memberData, userDetails, repositories) {
    this.handle = memberData.login;
    this.name = userDetails.name;
    this.imageUrl = memberData.avatar_url;
    this.repositories = repositories.map(repo => ({ title: repo.name, url: repo.html_url }));
    this.location = userDetails.location;
    this.email = userDetails.email;
    this.joined = new Date(userDetails.created_at);
  }
}
