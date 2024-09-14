import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  username: string;
};

type RepoStats = {
  name: string;
  full_name: string;
  description: string;
  url: string;
  fork: boolean;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  homepage: string;
  language: string;
  archived: boolean;
  open_issues_count: number;
  forks: number;
  watchers: number;
  stargazers_count: number;
};

export const TopGithubRepos = ({ username }: Props) => {
  const [repos, setRepos] = useState<RepoStats[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasErrored, setHasErrored] = useState<boolean>(false);

  useEffect(() => {
    const fetchRepos = async () => {
      // Get what we have in local storage
      const lastUpdate = new Date(
        localStorage.getItem("github_lastUpdated") as string,
      );
      const now = new Date();
      const oneDayInMs = 24 * 60 * 60 * 1000;
      const timeSinceLastUpdate = now.getTime() - lastUpdate.getTime();

      // If it has been less than 1 day since last update
      // Use what we already have saved
      if (timeSinceLastUpdate < oneDayInMs) {
        const rememberedRepos = localStorage.getItem("github_repos") as string;
        setRepos(JSON.parse(rememberedRepos) || ([] as RepoStats[]));
        setLoading(false);
      }

      // Otherwise - we are getting the new stuff
      else {
        try {
          const response = await axios.get<RepoStats[]>(
            `https://api.github.com/users/${username}/repos`,
          );

          if (response.status !== 200) {
            setHasErrored(true);
          }

          const sortedRepos = response.data.sort(
            (a: RepoStats, b: RepoStats) =>
              b.stargazers_count - a.stargazers_count,
          );
          setRepos(sortedRepos.slice(0, 5));
          localStorage.setItem(
            "github_repos",
            JSON.stringify(sortedRepos.slice(0, 5)),
          );
          localStorage.setItem("github_lastUpdated", new Date().toISOString());
        } catch (error) {
          // Warn on errors
          console.error("Error fetching repositories", error);
          setHasErrored(true);
        } finally {
          // Stop loading!
          setLoading(false);
        }
      }
    };

    fetchRepos();
  }, [username]);

  if (hasErrored) {
    return <p>Something has gone wrong :(</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (repos.length === 0) {
    return <p>No repositories found</p>;
  }

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.name}>
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            {repo.full_name}
          </a>{" "}
          ⭐ {repo.stargazers_count}
        </li>
      ))}
    </ul>
  );
};
