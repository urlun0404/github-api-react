import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Info from "./components/Info";

const Infos = () => {
  let [repoInfo, setRepoInfo] = useState(null);
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
      <main>
        <Info repoInfo={repoInfo} />
      </main>
      <footer>
        <Link to={`https://github.com/${username}/${repo}`} className="link">
          Go to this repository on GitHub
        </Link>
        <Link to={`/users/${username}`} className="link">
          Go back to {username}'s repository list
        </Link>
      </footer>
    </div>
  );
};

export default Infos;
