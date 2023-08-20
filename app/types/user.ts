// interface UserQuery {
//   data: UserData;
// }

interface UserData {
  search: UserSearch;
}

interface UserSearch {
  userCount: number;
  edges: UserEdge[];
}

interface UserEdge {
  node: UserNode;
}

interface UserNode {
  id: string;
  name: string;
  avatarUrl: string;
  login: string;
  bio: string;
  location: string;
  isSiteAdmin: boolean;
  websiteUrl: string;
  repositories: {
    totalCount: number;
  };
}
