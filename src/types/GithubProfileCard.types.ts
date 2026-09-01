export interface GithubProfile {
  bio: string;
  location: string | null;
  avatarUrl: string;
  name: string;
  id?: string;
}

export interface GithubProfileCardProps {
  prof: GithubProfile; 
}
