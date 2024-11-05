export interface PrimaryLanguage {
    name: string;
    color: string;
  }
  
  export interface RepoNode {
    id: string;
    name: string;
    description: string | null;
    url: string;
    primaryLanguage: PrimaryLanguage | null;
    forkCount: number;
    stargazers: {
      totalCount: number;
    };
    diskUsage: number;
  }
  
  export interface GithubRepo {
    node: RepoNode;
  }
  
  export interface GithubRepoCardProps {
    repo: GithubRepo; // A repo prop típusa
    isDark: boolean; // A isDark prop típusa
  }