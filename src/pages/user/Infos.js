import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";

const Infos = () => {
  const [repoInfo, setRepoInfo] = useState(null);
  const { username, repo } = useParams();

  // fetch API to get the information of the requested user's repository
  const repoURL = `https://api.github.com/repos/${username}/${repo}`;
  let getRepoInfo = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepoInfo(data));
  };

  // load the API data
  useEffect(() => getRepoInfo(repoURL), []);

  return (
    <div>
      <header>
        <Header userName={username} />
        <h2>
          <span className="variable" style={{ "font-size": "1.25rem" }}>
            repository name:
          </span>
          {repo}
        </h2>
      </header>
      <main className="repos">{repoInfo && <Info repoInfo={repoInfo} />}</main>
      <footer className="row">
        <a
          href={`https://github.com/${username}/${repo}`}
          target="_blank"
          className="link"
          style={{ "font-size": "1.25rem" }}
        >
          Go to this repository on GitHub
        </a>
        <Link
          to={`/users/${username}/repos`}
          className="link"
          style={{ "font-size": "1.25rem" }}
        >
          Go back to {username}'s repository list
        </Link>
      </footer>
    </div>
  );
};

export default Infos;
