export interface IRepos {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | undefined;
  topics: any[];
  created_at: Date
  message?: "Not Found";
}
