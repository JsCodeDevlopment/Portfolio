export interface IRepos {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | undefined;
  topics: string[];
  created_at: string
  message?: "Not Found";
}
