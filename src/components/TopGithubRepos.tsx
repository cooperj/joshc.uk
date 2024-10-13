import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

type Props = {
  username: string;
};

type RepoStats = {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
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
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
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
      const rememberedRepos = localStorage.getItem("github_repos") as string;
      if (timeSinceLastUpdate < oneDayInMs && rememberedRepos) {
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

          // Filter out archived repos with 0 stars
          let filteredRepos = response.data.filter(
            (repo: RepoStats) =>
              !(repo.archived && repo.stargazers_count === 0),
          );

          // Filter out the github home repo
          filteredRepos = filteredRepos.filter(
            (repo: RepoStats) => !(repo.name === repo.owner.login),
          );

          const sortedRepos = filteredRepos.sort(
            (a: RepoStats, b: RepoStats) => {
              // First compare by stargazers count
              const starComparison = b.stargazers_count - a.stargazers_count;

              // If stargazers count is the same, compare alphabetically by name
              if (starComparison !== 0) {
                return starComparison;
              } else {
                // Sort alphabetically by name
                return a.name.localeCompare(b.name);
              }
            },
          );

          setRepos(sortedRepos.slice(0, 4));
          localStorage.setItem(
            "github_repos",
            JSON.stringify(sortedRepos.slice(0, 4)),
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
    return <p>Something has gone wrong 😓</p>;
  }

  if (loading) {
    return <p>Loading GitHub Repos... 🤔</p>;
  }

  if (repos.length === 0) {
    return <p>No repositories found</p>;
  }

  return repos.map((repo) => (
    <div
      key={repo.name}
      className="bg-orange-300 dark:bg-orange-700 odd:bg-green-300 dark:odd:bg-green-700 px-4 py-4 m-2 rounded-xl flex flex-col w-full tablet:w-[calc(50%-2rem)] laptop:w-[calc(25%-2rem)] justify-start text-black-900 dark:text-white-500"
    >
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-500 dark:text-white-500 no-underline hover:text-black-600 dark:hover:text-white-600"
      >
        <h4>{repo.name}</h4>
      </a>

      <div className="flex gap-4 align-middle no-underline mb-2">
        <div className="flex items-center">
          <Icon icon="lucide:stars" className="mr-1" />
          {repo.stargazers_count}
        </div>
        <div className="flex items-center">
          <Icon icon="lucide:git-fork" className="mr-1" />
          {repo.forks}
        </div>

        {repo.homepage && (
          <div className="flex items-center">
            <a
              href={repo.homepage}
              target="_blank"
              className="text-black-500 dark:text-white-500 hover:text-black-700 hover:dark:text-white-700 no-underline"
            >
              <Icon icon="lucide:earth" />
            </a>
          </div>
        )}
      </div>
      <span className="flex-1 no-underline">
        {
          repo.description.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, "") // remove emojis
        }
      </span>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="print:hidden mt-2 self-end justify-self-end text-black-500 dark:text-white-500 no-underline hover:text-black-800 dark:hover:text-white-800 flex items-center hover:underline"
      >
        Read More
        <Icon icon="lucide:chevron-right" className="ml-2" />
      </a>
    </div>
  ));
};
