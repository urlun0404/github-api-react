import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
        <h1>{username}</h1>
        <h2>
          <span>Repository Name: </span>
          {repo}
        </h2>
      </header>
      <main>{repoInfo && <Info repoInfo={repoInfo} />}</main>
      <footer>
        <a
          href={`https://github.com/${username}/${repo}`}
          target="_blank"
          className="row link"
        >
          Go to this repository on GitHub
        </a>
        <Link to={`/users/${username}`} className="row link">
          Go back to {username}'s repository list
        </Link>
      </footer>
    </div>
  );
};

export default Infos;
