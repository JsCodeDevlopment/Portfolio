export interface IRepos {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  topics: any[];
  pushed_at: Date
  message?: "Not Found";
}
