import { useEffect, useState } from "react";
import { IRepos } from "../../interfaces/IRepos";
import { baseURL } from "../baseURL";

export function useProjectsRequest() {
  const [repos, setRepos] = useState<IRepos[]>([]);

  useEffect(() => {
    const repositories = async () => {
      try {
        const response = await fetch(`${baseURL}/repos`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    repositories();
  }, []);

  return { repos };
}
