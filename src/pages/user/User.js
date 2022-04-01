import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./components/Header";
import Repos from "./Repos";

const User = () => {
  const [userRepos, setUserRepos] = useState([]);
  let [repoLimit, setRepoLimit] = useState(0);

  // fetch API to get all the requested user's repositories (default max:30)
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}/repos`;
  const getUserRepos = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserRepos([...data]);
      });
  };

  const updateRepo = () => {
    if (repoLimit < userRepos.length) {
      setRepoLimit(Math.min((repoLimit += 10), userRepos.length));
    }
  };

  // trace if user scrolls to the bottom of the page
  const scrollTracker = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (Math.ceil(windowHeight + window.pageYOffset) >= docHeight) {
      updateRepo();
    }
  };

  // load the API data
  useEffect(() => {
    getUserRepos(url);
  }, []);

  // set initial repositories
  useEffect(() => {
    setRepoLimit(repoLimit === 0 ? Math.min(userRepos.length, 10) : 10);
  }, [userRepos]);

  // trace the scroll position of the page
  useEffect(() => {
    window.addEventListener("scroll", scrollTracker);
    return () => {
      window.removeEventListener("scroll", scrollTracker);
    };
  }, [repoLimit]);

  return (
    <div>
      <Header userName={username} />
      <div className="row">
        <span>點擊下方Repository看更多資訊</span>
        <span>
          <Link to={`/`} className="link" style={{ fontSize: "1.25rem" }}>
            Go back to homepage
          </Link>
        </span>
      </div>
      <Repos userName={username} userRepos={userRepos} repoLimit={repoLimit} />
    </div>
  );
};

export default User;
